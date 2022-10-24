import { createContext, useContext, useState } from "react";
import { CartItemProps, ShoppingCartContextProps, ShoppingCartProviderProps } from "../moduls/modules";
import { useLocalStorage } from "../hooks/useLocalStorage";


const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export  function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export  function ShoppingCartProvider( {children} : ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItemProps[]>("shoping-cart-voodoo",[])
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }


    function addToCart(id: number) {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1}]
            }
            else {
                return currentItems.map(item => {
                    if(item.id === id) {
                        return {...item}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    function increaseCart(id: number) {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1}]
            }
            else {
                return currentItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCart(id: number) {
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            }
            else {
                return currentItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    const cartQuantity = cartItems.reduce(
        (quantity:any,items:any) =>
        items.quantity + quantity
    ,0)

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCart,
            addToCart,
            decreaseCart,
            removeFromCart,
            cartItems,
            cartQuantity,
            openCart,
            closeCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
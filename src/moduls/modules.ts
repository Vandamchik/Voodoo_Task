import {ReactNode} from "react";

export interface IProducts {
    id?: number
    title?: string
    price?: number
    description?: string
    category?: string
    image?: string
    rating?: {
        rate?: number,
        count?: number
    }
}

export interface ProductProps {
    productData: IProducts
}

export interface ShoppingCartProviderProps  {
    children: ReactNode
}

export interface  ShoppingCartContextProps {
    getItemQuantity: (id: number) => number
    increaseCart: (id: number) => void
    decreaseCart: (id: number) => void
    removeFromCart: (id: number) => void
    cartItems: CartItemProps[]
    cartQuantity: number
    openCart: () => void
    closeCart: () => void
}

export interface CartItemProps {
    id: number,
    quantity: number
}
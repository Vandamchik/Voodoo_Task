import React, {useEffect, useState} from 'react';
import {useShoppingCart} from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import {IProducts} from "../moduls/modules";
import axios from "axios";

export default function Cart(): JSX.Element {
    const {cartItems} = useShoppingCart()
    const [products, setProducts] = useState<IProducts[]>([]);
    const {cartQuantity} = useShoppingCart()


    async function fetchProducts() {
        try {
            const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products?limit=10')
            setProducts(response.data)
        } catch (e: unknown) {

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    let res:any[] = [];
    (function check() {
        for( let i = 0; i < products.length; i++) {
            for( let k = 0; k < cartItems.length; k++){
                if(products[i].id === cartItems[k].id){
                    res.push(products[i])
                }
            }
        }
    })()

console.log(res)

    return (
        <div className="w-full h-full flex  flex-col">
            <p>Total: {res.map(el => (el.price * cartQuantity).toFixed(2))} </p>
            {res.map(el => <CartItem id={el.id} title={el.title} image={el.image} price={el.price} key={el.id} category={el.category}/>)}
        </div>
    );
};


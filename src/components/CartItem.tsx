import React from 'react';
import {useShoppingCart} from "../context/ShoppingCartContext";
import {IProducts} from "../moduls/modules";
import {formatCurrency} from "../hooks/formatCurrency";


export default function CartItem( props: IProducts):JSX.Element {
    const {removeFromCart} = useShoppingCart()
    const {image, title, price, category, id } = props




    return (
        <div
        className="flex flex-col mb-5 w-full h-[450px] justify-center items-center "
        >
            <p className="mb-5"><span className="font-bold">Product name: </span>{title}</p>
            <img className="w-[200px] mb-5" src={image} alt={category} />
            <p ><span className="font-bold">Price: </span>{formatCurrency(price!)}</p>
            <button
                className="border-2 border-solid w-full rounded-full mt-2 w-[180px]"
                onClick={() => removeFromCart(id!)}
            >Remove from cart</button>
        </div>
    );
};


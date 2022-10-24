import React from 'react';
import { ProductProps } from "../moduls/modules";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../hooks/formatCurrency";



export default function ProductsDisplay({productData}: ProductProps): JSX.Element {
    const { removeFromCart,addToCart } = useShoppingCart()


    return (
        <div className=" py-2 px-4 h-[300px]  flex items-center mb-2">
            <img src={productData.image} className="w-1/6" alt={productData.title}/>
            <div className="flex flex-col ml-5">
                <p className="mb-2"><span className="font-bold">Title: </span>{productData.title}</p>
                <p><span className="font-bold">Description: </span>{productData.description}</p>
                <p><span className="font-bold">Price: </span>{formatCurrency(productData.price!)}</p>
                <div className="mt-2">
                    <div className="flex w-[200px] items-center mr-5 flex-col justify-center">
                        <div className="flex items-center justify-evenly w-full">
                            <button
                                className="border-2 border-solid rounded-full w-[70px] justify-center items-center"
                                onClick={() => addToCart(productData.id!)}
                            >Add</button>
                            <button
                                onClick={() => removeFromCart(productData.id!)}
                                className="border-2 border-solid rounded-full w-[70px] justify-center items-center"
                            >Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
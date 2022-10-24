import React, { useState } from 'react';
import { ProductProps } from "../moduls/modules";
import { useShoppingCart } from "../context/ShoppingCartContext";



export default function ProductsDisplay({productData}: ProductProps): JSX.Element {
    const {getItemQuantity, increaseCart, decreaseCart, removeFromCart, cartItems, cartQuantity} = useShoppingCart()




    function btnStartPurchase(event: React.MouseEvent<HTMLButtonElement>): void {
        increaseCart(productData.id!)
    }

    function removePurchase(event: React.MouseEvent<HTMLButtonElement>): void {
        removeFromCart(productData.id!)
    }

    // const quantity = 0;

    return (
        <div className=" py-2 px-4 h-[300px]  flex items-center mb-2">
            <img src={productData.image} className="w-1/6" alt={productData.title}/>
            <div className="flex flex-col ml-5">
                <p className="mb-2"><span className="font-bold">Title: </span>{productData.title}</p>
                <p><span className="font-bold">Description: </span>{productData.description}</p>
                <p><span className="font-bold">Price: </span>{productData.price} $</p>
                <div className="mt-2">
                    { cartQuantity === 0 ?
                        <button
                            className="border-2 border-solid rounded-full mr-5 w-[130px]"
                            onClick={btnStartPurchase}
                        >Add to Cart</button>
                    :
                        <div className="flex w-[200px] items-center mr-5 flex-col justify-center">
                            <div className="flex items-center justify-evenly w-full">
                                <button
                                    className="border-2 border-solid rounded-full w-[50px] justify-center items-center"
                                    onClick={() => increaseCart(productData.id!)}
                                >+</button>
                               <p><span className="font-bold">{cartQuantity} </span>in cart</p>
                                <button
                                    onClick={() => decreaseCart(productData.id!)}
                                    className="border-2 border-solid rounded-full w-[50px] justify-center items-center"
                                >-</button>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="border-2 border-solid w-full rounded-full mt-2 w-[180px]"
                                    onClick={removePurchase}
                                >Remove from Cart</button>
                            </div>
                        </div>

                    }


                </div>

            </div>
        </div>
    );
}
import React, {useState} from 'react';
import {IProducts} from "../moduls/modules";
import {Simulate} from "react-dom/test-utils";
import {useShoppingCart} from "../context/ShoppingCartContext";


interface ProductProps {
    children: React.ReactNode
    productData: IProducts
}

export default function ProductBonusOption({productData}: ProductProps) {
    const [inputCheck, setInputCheck] = useState<boolean>(false)
    const {getItemQuantity, increaseCart, decreaseCart, removeFromCart} = useShoppingCart()
    function checkHandler() {
        setInputCheck((prev) => !prev)
        if(!inputCheck) increaseCart(productData.id!)
        else {decreaseCart(productData.id!)}
    }

    const today:Date = new Date()
    const deliveryDate:any = today.setDate(today.getDate() + 2)
    // console.log(deliveryDate.toString("MM/dd/yyyy"))


    return (
        <div className="m-[20px] ">
            <p className="mb-2"><span className="font-bold">Title: </span>{productData.title}</p>
            <input
                type="checkbox"
                checked={inputCheck}
                onChange={checkHandler}
            />
            {inputCheck &&
                <div>
                    <img src={productData.image} className="w-1/6" alt={productData.title}/>
                    <p><span className="font-bold">Description: </span>{productData.description}</p>
                    <p><span className="font-bold">Price: </span>{productData.price}$</p>
                    <p>{deliveryDate}</p>
                </div>
            }
        </div>
    );
}


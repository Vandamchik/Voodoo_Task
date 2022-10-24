import React, { useState }  from 'react';
import { IProducts } from "../moduls/modules";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../hooks/formatCurrency";


interface ProductProps {
    children: React.ReactNode
    productData: IProducts
}

export default function ProductBonusOption({productData}: ProductProps) {
    const { removeFromCart, addToCart } = useShoppingCart()
    const [inputCheck, setInputCheck] = useState<boolean>(false)
    const today:Date = new Date()
    const deliveryDate:any = today.setDate(today.getDate() + 2)

    function checkHandler() {
        setInputCheck((prev) => !prev)
        if(!inputCheck) addToCart(productData.id!)
        else removeFromCart(productData.id!)
    }

    return (
        <div className="m-[20px] w-[400px] border-2 border-gray-400 border-solid p-3 rounded-xl flex flex-col justify-center items-center">
            <p className="mb-2"><span className="font-bold">Title: </span>{productData.title}</p>
            <input
                type="checkbox"
                checked={inputCheck}
                onChange={checkHandler}
            />
            {inputCheck &&
                <div className="p-3 mb-2">
                    <img src={productData.image} className="w-1/3" alt={productData.title}/>
                    <p className="m-2"><span className="font-bold">Description: </span>{productData.description}</p>
                    <p className="m-2"><span className="font-bold">Price: </span>{formatCurrency(productData.price!)}</p>
                    <p>
                        <span className="text-red-500 font-bold">Estimate Delivery date </span>
                        {new Date(deliveryDate).toDateString()}
                    </p>
                </div>
            }
        </div>
    );
}


import React, {useState} from 'react';
import {IProducts} from "../moduls/modules";
import {Simulate} from "react-dom/test-utils";


interface ProductProps {
    children: React.ReactNode
    productData: IProducts
}

export default function ProductBonusOption({productData}: ProductProps) {
    const [inputCheck, setInputCheck] = useState<boolean>(false)


    return (
        <div className="m-[20px] ">
            <p className="mb-2"><span className="font-bold">Title: </span>{productData.title}</p>
            <input
                type="checkbox"
                checked={inputCheck}
                onChange={() => setInputCheck(prev => !prev) }
            />
            {inputCheck &&
                <div>
                    <img src={productData.image} className="w-1/6" alt={productData.title}/>
                    <p><span className="font-bold">Description: </span>{productData.description}</p>
                    <p><span className="font-bold">Price: </span>{productData.price}</p>
                </div>
            }
        </div>
    );
}


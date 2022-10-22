import React from 'react';
import {IProducts} from "../moduls/modules";

interface ProductProps {
    productData: IProducts
}

export default function ProductsDisplay({productData}: ProductProps): JSX.Element {


    return (
        <div className=" py-2 px-4  flex items-center mb-2">
            <img src={productData.image} className="w-1/6" alt={productData.title}/>
            <div className="flex flex-col ml-5">
                <p className="mb-2"><span className="font-bold">Title: </span>{productData.title}</p>
                <p><span className="font-bold">Description: </span>{productData.description}</p>
                <p><span className="font-bold">Price: </span>{productData.price}</p>
            </div>
        </div>
    );
}
import React, {useEffect, useState} from 'react';
import {IProducts} from '../moduls/modules'
import axios, {AxiosError} from "axios";
import ProductsDisplay from "../components/ProductsDisplay";


export default function FirstPage(): JSX.Element {
    const [products, setProducts] = useState<IProducts[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [activeBtn, setActiveBtn] = useState<boolean>(false)
    const btnActiveClass = activeBtn ? " h-[20px] border-red-900" :  " h-[25px] border-green-900";
    const btn2ActiveClass = activeBtn ? "h-[25px] border-green-900"  :  " h-[20px] border-red-900";
    const btnClass = ['bg-white w-[30px]  border-2 border-solid rounded-full mr-2' , btnActiveClass]
    const btn2Class = ['bg-black w-[30px]  border-2 border-solid rounded-full mr-2' , btn2ActiveClass]

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products?limit=1')
            setProducts(response.data)
            setActiveBtn(true)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    async function whiteBtnHandler() {
        const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products?limit=2')
        const productIssues = [];
        setActiveBtn(false)
        productIssues.push(response.data[1])
        setProducts(productIssues)
    }

    async function blackBtnHandler() {
        const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products?limit=2')
        const productIssues = [];
        setActiveBtn(true)
        productIssues.push(response.data[0])
        setProducts(productIssues)
    }


    return (
        <>
        { loading ?
            <p>Loading...</p>
        :
            <div className="w-[800px] h-full mt-10 border-2 border-gray-400 border-solid rounded-3xl flex flex-col mx-auto">
                { products.map(el => <ProductsDisplay productData={el} key={el.id} />) }
                <div className="flex items-center h-[35px] ">
                    <div className="flex ml-[165px]">
                        <p className="font-bold mr-2">Select color</p>
                        <button
                            className={btnClass.join(' ')}
                            onClick={whiteBtnHandler}
                        ></button>
                        <button
                            className={btn2Class.join(' ')}
                            onClick={blackBtnHandler}
                        ></button>
                    </div>
                </div>
            </div>
        }
        </>
    );
};


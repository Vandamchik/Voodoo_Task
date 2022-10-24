import React, { useState } from 'react';
import { IProducts } from '../moduls/modules'
import axios from "axios";
import ProductsDisplay from "../components/ProductsDisplay";
import useProduct from "../hooks/product";


export default function FirstPage(): JSX.Element {
    const { products, error, loading, } = useProduct()
    const [productsIssue, setProductsIssue] = useState<IProducts[]>([])
    const [changeColorBtn, setChangeColorBtn] = useState(false)
    const [whiteColor, setWhiteColor ] = useState<boolean>(false)
    const [blackColor, setBlackColor ] = useState<boolean>(true)
    const btnWhiteActiveClass = whiteColor ? " h-[30px]  border-green-900" :  " h-[30px] border-red-900";
    const btnBlackActiveClass = blackColor ? "h-[30px] border-green-900"  : " h-[30px] border-red-900";
    const btnWhiteClass = ['bg-white w-[30px]  border-2 border-solid rounded-full mr-2' , btnWhiteActiveClass]
    const btnBlackClass = ['bg-black w-[30px]  border-2 border-solid rounded-full mr-2' , btnBlackActiveClass]


    async function whiteBtnHandler() {
        const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products?limit=2')
        const productIssues = [];
        setWhiteColor(true)
        setBlackColor(false)
        productIssues.push(response.data[1])
        setProductsIssue(productIssues)
        setChangeColorBtn(true )
    }

    async function blackBtnHandler() {
        const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products?limit=1')
        const blackColorData= [];
        setBlackColor(true)
        setWhiteColor(false)
        blackColorData.push(response.data[0])
        setProductsIssue(blackColorData)
        setChangeColorBtn(false )
    }


    return (
        <>
            { error && <p className="text-center text-red-900">{error}</p> }
            { loading ? <p className="text-center font-bold text-black-900">loading..</p>
                :
                <div
                    className="w-[800px] h-full mt-10 border-2 border-gray-400 border-solid rounded-3xl flex flex-col mx-auto">
                    { changeColorBtn ?
                        productsIssue.map(el => <ProductsDisplay productData={el} key={el.id}/>)
                        :
                        products.map(el => <ProductsDisplay productData={el} key={el.id}/>)
                    }
                    <div className="flex items-center h-[45px] ">
                        <div className="flex ml-[165px]">
                            <p className="font-bold mr-2">Select color</p>
                            <button
                                className={btnBlackClass.join(' ')}
                                onClick={blackBtnHandler}
                            ></button>
                            <button
                                className={btnWhiteClass.join(' ')}
                                onClick={whiteBtnHandler}
                            ></button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};


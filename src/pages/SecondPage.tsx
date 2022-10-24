import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from "axios";
import { IProducts } from "../moduls/modules";
import ProductBonusOption from "../components/ProductBonusOption";

export default function SecondPage() {
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [products, setProducts] = useState<IProducts[]>([])

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products?limit=7')
            response.data.splice(0, 2)
            setProducts(response.data)
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



    return (
        <>
        { error && <p className="text-center text-red-900">{error}</p> }
            { loading ? <p className="text-center font-bold text-black-900">loading..</p>
                :
                <div className="flex flex-col items-center justify-center">
                    {products.map(el => <ProductBonusOption key={el.id} productData={el}>{el.id}</ProductBonusOption>)}
                </div>
            }
        </>
    );
};


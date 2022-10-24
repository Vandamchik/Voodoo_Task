import {useEffect, useState} from "react";
import {IProducts} from "../moduls/modules";
import axios, {AxiosError} from "axios";


export default function useProduct() {
    const [products, setProducts] = useState<IProducts[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProducts[]>('https://fakestoreapi.com/products?limit=1')
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

    return { products, error, loading }

}
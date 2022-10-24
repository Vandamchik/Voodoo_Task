import { useEffect, useState } from "react";

export function useLocalStorage<T>(key:string, intitialValue: T | (() => T)) {
    const [value, setValue]= useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof intitialValue === "function"){
            return (intitialValue as () => T)()
        }
        else {
            return intitialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}
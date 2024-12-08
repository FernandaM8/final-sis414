import { getProducts } from "@/services/products.service"
import { useEffect, useState } from "react"

export const useProducts = () => {
    const [products, setProduct] = useState<any>()
    const [loading, setLoading] = useState<any>()

    const fetchData = async () => {
        try {
            const responseProducts = await getProducts()
            setProduct(responseProducts)
        } catch(e) {
            console.log(e)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return {products, loading}
}
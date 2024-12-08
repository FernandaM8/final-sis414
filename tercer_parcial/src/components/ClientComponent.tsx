import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";

export default function ClientComponent() {
    const { products, loading } = useProducts()

    console.log(loading ? 'CARGANDO...' : '')
    if (!loading) {
        console.log(products)
    }
    return (
        <div className="client-section">
            <h1>Bienvenidos a la tienda MisiTECH</h1>
            <div>
                <div className="product-card">
                    <img src="/images/tv1.jpg" alt="" />
                    {products?.products.map((item: any) => {
                        return (
                            <div>
                                <div>
                                    <p><span>Marca: </span> {item.marca}</p>
                                    <p><span>Tamaño: </span> {item.tamaño}</p>
                                    <p><span>Resolución: </span> {item.resolucion}</p>
                                    <p><span>Tecnología: </span> {item.tecnologia}</p>
                                </div>
                                <p><span>Precio: </span> Bs. {item.precio}</p>
                            </div>
                        )
                    })}

                    <button className="form-btn">Comprar</button>
                </div>
            </div>
        </div>
    )
}
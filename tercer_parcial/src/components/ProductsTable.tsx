import { useRouter } from "next/router";
import Footer from "./Footer";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/lib/types";
import { deleteProduct, updateProducts } from "@/services/products.service";

export default function ProductsTable() {
    const { products, loading } = useProducts()

    console.log(loading ? 'CARGANDO...' : '')
    if (!loading) {
        console.log(products)
    }

    const handleUpdate = async (product: Product) => {
        await updateProducts(product);
        window.location.reload();
    };

    const handleDelete = async (id: string) => {
        if (confirm(`¿Quieres borrar el producto ${id}?`)) {
            await deleteProduct(id);
            window.location.reload();
        }
    };
    return (
        <table className="forms">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        MARCA
                    </th>
                    <th>
                        TAMAÑO
                    </th>
                    <th>
                        RESOLUCIÓN
                    </th>
                    <th>
                        TECNOLOGÍA
                    </th>
                    <th>
                        PRECIO
                    </th>
                </tr>
            </thead>
            {products?.products.map((item: any) => {
                return (
                    <tbody>
                        <tr key={item.id}>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.marca}
                            </td>
                            <td>
                                {item.tamaño}
                            </td>
                            <td>
                                {item.resolucion}
                            </td>
                            <td>
                                {item.tecnologia}
                            </td>
                            <td>
                                {item.precio}
                            </td>
                            <td>
                                <img src={item.images} alt="product" />
                            </td>
                            <td>
                                <button className="table-btn animated-background" onClick={() => handleDelete(item.id)}>Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    );
}
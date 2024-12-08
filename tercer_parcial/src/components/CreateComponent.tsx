import "./../app/globals.css";
import ProductForm from "@/components/ProductForm";
import { Product } from "@/lib/types";
import { createProducts } from "@/services/products.service";
import Button from "@/components/Button";

const handleCreate = async (product: Omit<Product, 'id'>) => {
    await createProducts(product);
    window.location.reload();
  };

export default function CreateComponent() {
    return (
        <div className="create">
            <ProductForm onSubmit={handleCreate} />
            <Button text="Cancelar" to="/admin" />
        </div>
    )
}
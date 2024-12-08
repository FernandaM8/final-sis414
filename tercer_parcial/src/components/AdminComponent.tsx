import { createProducts } from "@/services/products.service";
import ProductForm from "./ProductForm";
import { Product } from "@/lib/types";
import Header from "./Header";
import ProductsTable from "./ProductsTable";
import Footer from "./Footer";
import Button from "./Button";

export default function AdminComponent() {
  return (
    <div className="admin-section">
      <Button text="Agregar Producto" to="/admin/create" />
      <ProductsTable />
    </div>
  )
}
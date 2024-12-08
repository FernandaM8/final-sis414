'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useProducts } from "@/hooks/useProducts";
import ProductForm from "@/components/ProductForm";
import { createProducts, deleteProduct, getProducts, updateProducts } from "@/services/products.service";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/lib/types";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Admin from "@/components/AdminComponent";
import Client from "@/components/ClientComponent";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { products, loading } = useProducts()

  console.log(loading ? 'CARGANDO...' : '')
  if (!loading) {
    console.log(products)
  }

  const handleCreate = async (product: Omit<Product, 'id'>) => {
    await createProducts(product);
    window.location.reload();
  };

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
    <div className={styles.page}>
      <div className="forms">
        <div>
          <h1 className="title animated-text">Añadir Producto</h1>
          <ProductForm onSubmit={handleCreate} />
        </div>
      </div>
      <div>
        <table>
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
                    <button className="table-btn animated-background" onClick={() => handleDelete(item.id)}>Eliminar</button>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
}

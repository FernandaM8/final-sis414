import { instanceProducts } from "@/configuration/config-products"
import { Product } from "@/lib/types"

// LEER DATOS DEL API
export const getProducts = async () => {
  const response = await instanceProducts.get('/products')
  console.log(response)
  return response.data
}

// CREAR PRODUCTOS
export const createProducts = async (product: Omit<Product, 'id'>) => {
  try {
    const response = await instanceProducts.post("/products", product);
    return response.data;
  } catch (error) {
    console.error('error creando el producto:', error);
    throw new Error('No se pudo crear el producto');
  }
};

// ACTUALIZAR PRODUCTO
export const updateProducts = async (product: Product) => {
  try {
    const response = await instanceProducts.put(`/products/${product.id}`, product);
    return response.data;
  } catch (error) {
    console.error('Error actualizando el producto:', error);
    throw new Error('No se pudo actualizar el producto');
  }
};

// ELIMINAR PRODUCTO
export const deleteProduct = async (id: string) => {
  try {
    await instanceProducts.delete(`products/${id}`);
    return true;
  } catch (error) {
    console.error('Error borrando producto:', error);
    throw new Error('No se pudo borrar el producto');
  }
};
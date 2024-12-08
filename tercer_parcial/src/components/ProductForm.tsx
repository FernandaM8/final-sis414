'use client';

import React, { useState } from 'react';
import { Product } from '@/lib/types';

interface ProductFormProps {
  initialData?: Omit<Product, 'id'> | null; // Datos iniciales para editar
  onSubmit: (data: Omit<Product, 'id'>) => Promise<void>; // Función para manejar el envío
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>(
    initialData || { marca: '', tamaño: '', resolucion: '', tecnologia: '', precio: 0, estado: true }
  );

  const [file, setFile] = useState<File | null>(null); /* estado null para el array ded carga */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;     /* Data con las imagenes, solo subi imagenes esta definido mas abajo */
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; /* primer archivo seleccionado */
    if (selectedFile) {
      setFile(selectedFile);

      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('fileName', selectedFile.name);/* si puedes usa un generador de ids para cada imagen para el noimobre */

      console.log('Archivo seleccionado:', selectedFile);
      console.log('FormData creado:', formData);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    if (file) {
      const uploadData = new FormData();
      uploadData.append('file', file);
      uploadData.append('fileName', file.name);
      /* subir a la api aqui*/      
    }
  };

  return (
    <div>
      <h1 className="title animated-text">Añadir Producto</h1>
      <form className="form-create" onSubmit={handleSubmit}>
        <label>
          Marca:
          <input
            type="text"
            name="marca"
            placeholder="Marca"
            value={formData.marca}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Tamaño:
          <input
            type="text"
            name="tamaño"
            placeholder="Tamaño"
            value={formData.tamaño}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Resolución:
          <input
            type="text"
            name="resolucion"
            placeholder="Resolución"
            value={formData.resolucion}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Tecnología:
          <input
            type="text"
            name="tecnologia"
            placeholder="Tecnología"
            value={formData.tecnologia}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Precio:
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={formData.precio}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Imagen:
          <input
            type="file"
            name="imagen"
            accept="image/*" /* solo imágenes */
            onChange={handleImageChange}
          />
        </label>

        <label>
          Producto disponible:
          <input
            type="checkbox"
            name="disponible"
            checked={formData.estado}
            onChange={(e) =>
              setFormData({ ...formData, estado: e.target.checked })
            }
          />
        </label>
        <button className="form-btn animated-background" type="submit">
          Registrar Producto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;

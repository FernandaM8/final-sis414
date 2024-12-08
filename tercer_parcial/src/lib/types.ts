export interface Product {
  id: string;
  marca: string;
  tamaño: string;
  resolucion: string;
  tecnologia: string;
  precio : number;
  imagen: File | null;
  estado : boolean;
}

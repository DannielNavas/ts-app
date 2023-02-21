import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
};

export const updatedProduct = (id: string, changes: Product) => {
  // code
};

export const deleteProduct = (id: string) => {
  // code
};

export const getProduct = (id: string) => {
  // code
};

export const getProducts = () => {
  // code
};

export const getProductsByCategory = (categoryId: string) => {
  // code
};

export const getProductsByTag = (tag: string) => {
  // code
};

export const getProductsBySize = (size: string) => {
  // code
};

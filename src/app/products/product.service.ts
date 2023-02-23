import { faker } from '@faker-js/faker';
import { CreateProductDto } from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createAt: new Date(),
    updateAt: new Date(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createAt: new Date(),
      updateAt: new Date(),
    },
  };
  products.push(newProduct);
  return newProduct;
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

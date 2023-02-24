import { faker } from '@faker-js/faker';
import {
  CreateProductDto,
  FindProductDto,
  UpdateProductDto,
} from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
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

export const updatedProduct = (
  id: string | number,
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((product) => product.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
    updateAt: new Date(),
  };
  return products[index];
};

export const deleteProduct = (id: string) => {
  // code
};

export const findProducts = (dto: FindProductDto): Product[] => {
  // dto.isNew = false;
  return products;
};

export const getProducts = () => {
  return products;
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

import { faker } from '@faker-js/faker';
import {
  addProduct,
  findProducts,
  products,
  updatedProduct,
} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    categoryId: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['small', 'medium', 'large']),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    price: Number(faker.commerce.price()),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
  });
}

console.log(products);
const product = products[0];
updatedProduct(product.id, {
  title: 'New title',
  stock: 80,
  price: 101,
});

findProducts({
  stock: 10,
  color: 'red',
  isNew: true,
  tags: ['tag1', 'tag2'],
});

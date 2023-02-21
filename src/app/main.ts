import { faker } from '@faker-js/faker';
import { addProduct, products } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    createAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['small', 'medium', 'large']),
    category: {
      id: faker.datatype.uuid(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent(),
      name: faker.commerce.department(),
    },
    updateAt: faker.date.recent(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    price: Number(faker.commerce.price()),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
  });
}

console.log(products);

type Size = 'small' | 'medium' | 'large';
type userId = string | number;
// TODO: type puede definir tipos primitidos y directos. un type no se puede extender
// type Product = {
//   id: string | number;
//   title: string;
//   createAt: Date;
//   stock: number;
//   size?: Size;
// };

interface Product {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Size;
}

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
};
addProduct({
  id: 1,
  title: 'Camisa',
  createAt: new Date(),
  stock: 10,
  size: 'small',
});

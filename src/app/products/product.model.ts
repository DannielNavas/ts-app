import { Category } from '../category/category.model';

type Size = 'small' | 'medium' | 'large';
export type userId = string | number;
export interface Product {
  id: string | number;
  title: string;
  createAt: Date;
  updateAt: Date;
  stock: number;
  size?: Size;
  category: Category;
}

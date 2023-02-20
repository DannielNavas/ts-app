import { BaseModel } from '../base.model';
import { Category } from '../category/category.model';

type Size = 'small' | 'medium' | 'large';
export type userId = string | number;
export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Size;
  category: Category;
}

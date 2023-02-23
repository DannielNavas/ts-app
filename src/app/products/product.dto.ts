import { Product } from './product.model';
// TODO: elijo los campos que quiero no sean obligatorios
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createAt' | 'updateAt' | 'category'> {
  categoryId: string;
}
// TODO: elijo los campos que quiero que sean obligatorios
type example = Pick<Product, 'color' | 'description'>;

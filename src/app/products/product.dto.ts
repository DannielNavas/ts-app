import { Product } from './product.model';
// TODO: elijo los campos que quiero no sean obligatorios
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createAt' | 'updateAt' | 'category'> {
  categoryId: string;
}
// TODO: elijo los campos que quiero que sean obligatorios
type example = Pick<Product, 'color' | 'description'>;
// TODO: Deja todo opcional
export interface UpdateProductDto extends Partial<CreateProductDto> {}
// TODO: Deja todo obligatorio
type example2 = Required<Product>;
// TODO: Deja una interface PArcial pero solo de lectura no se puede sobre escribir el parametro
export interface FindProductDto extends Readonly<Partial<Product>> {}

// type example2 = Readonly<Product>;

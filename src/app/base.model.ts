export interface BaseModel {
  // TODO: atributo de solo lectura
  readonly id: string | number;
  createAt: Date;
  updateAt: Date;
}

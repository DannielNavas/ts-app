import { BaseModel } from '../base.model';

export enum ROLES {
  ADMIN = 'admin',
  SALLER = 'saller',
  COSTUMER = 'costumer',
}

export interface User extends BaseModel {
  username: string | number;
  role: ROLES;
}

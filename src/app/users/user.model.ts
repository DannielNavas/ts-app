export enum ROLES {
  ADMIN = 'admin',
  SALLER = 'saller',
  COSTUMER = 'costumer',
}

export interface User {
  username: string | number;
  role: ROLES;
}

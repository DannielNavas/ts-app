enum ROLES {
  ADMIN = 'admin',
  SALLER = 'saller',
  COSTUMER = 'costumer',
}

type User = {
  username: string;
  role: ROLES;
};

const username: User = {
  username: 'John',
  role: ROLES.ADMIN,
};

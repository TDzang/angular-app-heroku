export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  // role: Role;
  // token?: string;
}

export interface UserRegister {
  email: string;
  password: string;
  confirmPassword: string;
  address:string;
  firstname: string;
  lastname: string;
  roleid: string;
}

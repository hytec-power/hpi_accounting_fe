export interface User {
  uuid: string;
  email: string;
  firstname: string;
  middlename: string;
  lastname: string;
  image: string;
  created_at: string;
  role?: UserRole;
}

export interface UserRole {
  name: string;
  title: string;
}

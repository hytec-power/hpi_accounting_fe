import {User, UserRole} from "src/app/interfaces/user";

export interface CurrentUser {
  user: User,
  role: UserRole,
  token: string,
}

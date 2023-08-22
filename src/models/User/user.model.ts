import { Roles } from '../Roles/roles';

export interface UserInfo {
  idUser: number;
  username: string;
  userType: string;
  token: string;
  rol:Roles;
}

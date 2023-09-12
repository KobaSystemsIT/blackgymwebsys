import { Roles } from '../roles/roles';

export interface UserInfo {
  idUser: number;
  username: string;
  userType: string;
  token: string;
  rol:Roles;
  idClub:number;
}

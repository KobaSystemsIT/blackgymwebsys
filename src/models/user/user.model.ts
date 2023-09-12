import { Roles } from '../roles/roles';

export interface UserInfo {
  idUser: number;
  username: string;
  userType: string;
  rol:Roles;
  idClub:number;
}

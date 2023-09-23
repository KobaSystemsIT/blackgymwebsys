import { Roles } from '../roles/roles';

export interface UserInfo {
  idUser: number;
  username: string;
  userType: string;
  rol:Roles;
  idClub:number;
}

export interface UserData {
  username: string;
  lastName: string;
  phoneNumber: string;
  email:string;
  nameEmergencyContact: string;
  emergencyContact:string;
  nameSubscriptionType:string;
  isActive:string;
  idUserType:number;
}

export interface UserSys {
  adminID:number,
  username:string,
  nameUserType:string
}

export interface UserVisitor {
  id: number,
  username: string,
  phone: string,
  arrivalHour: string,
  exitHour: string,
  visitas: number

}


import { Roles } from "@/models/roles/roles";

export interface userData {
    idUser : number,
    username : string,
    idClub : number,
    rol: Roles
}
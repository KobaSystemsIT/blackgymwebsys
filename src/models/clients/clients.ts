export interface ClientsSubs {
    idUser: number,
    username: string,
    lastName: string,
    nameEmergencyContact: string,
    emergencyContact: string,
    nameSubscriptionType: string,
    isActive: string,
    isRenovation: string,
    startDate: string,
    endDate: string,
    diasRestantes:string
}

export interface Clients {
    idUser: number,
    username: string,
    lastName: string,
    nameEmergencyContact: string,
    emergencyContact: string,
}

export interface ClientsData {
    id:number
    Cantidad: number,
    Categoria: string, 
    Color:string 
}
export interface Suppliers {
    idSupplier: number;
    nameSupplier: string;
}

export interface PaySuppliers {
    id: number;
    conceptPayment: string;
    paymentAmount: number;
    nameSupplier: string;
    date: string;
    username: string;
    paymentDescription: string;
}
import { number, string } from "yup";

export interface Client {
    comment: string
    countorders: number
    creationdatetime?: number
    email: string
    firstname: string
    id: number
    lastname: string
    phones: [{
        id: number
        name: string
        number: string
    }]
    secondname: string
    sumprice: number
    type: number
}


export interface IClientPhones {
    number: string
    name?: string
}

export interface IClientData {
    firstname: string;
    secondname?: string;
    lastname: string;
    email?: string;
    type?: number;
    comment?: string;
    phones: IClientPhones[];
}

export interface ClientBasicInfoProps {
    current: number;
    setCurrent: Function;
}

export interface ProjectBankData {
    bankName: string
    checkingAccount: string
    correspondentAccount: string
    bankInn: string
    bankAdress: string
    bankDescription: string
}

export interface ProjectLegals {
    name: string
    fullName: string
    shortName: string
    ogrn: string
    inn: string
    legalAdress: string
    postAdress: string
    status: boolean
    banksDetails: ProjectBankData[]
}
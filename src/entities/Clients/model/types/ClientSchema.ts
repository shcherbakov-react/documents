export type IPhoneNumbers = {
    number: string;
}

export type ClientSchema = {
    id?: string
    firstname?: string;
    secondname?: string;
    lastname?: string;
    email?: string;
    type?: number;
    comment?: string;
    phones?: IPhoneNumbers[];
}

export type LegalsData = {
    name: string,
    fullName: string,
    shortName: string
    ogrn: string
    inn: string
    legalAdress: string
    postAdress: string
    status: string
    banksDetails: BankDetails[]
}

export type BankDetails = {
    bankName: string
    checkingAccount: string
    correspondentAccount: string
    bankInn: string
    bankAdress: string
    bankDescription: string
}
// export interface ClientSchema {
//     comment: string
//     countorders: number
//     creationdatetime: number
//     email: string
//     firstname: string
//     id: number
//     lastname: string
//     phones: [{
//         id: number
//         name: string
//         number: string
//     }]
//     secondname: string
//     sumprice: number
//     type: number
// }

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
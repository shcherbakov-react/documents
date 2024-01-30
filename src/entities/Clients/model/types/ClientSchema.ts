export interface ClientSchema {
    comment: string
    countorders: number
    creationdatetime: number
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
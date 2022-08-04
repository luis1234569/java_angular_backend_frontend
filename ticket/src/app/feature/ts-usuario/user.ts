import { Authorize } from "../authorize/authorize"

export interface User {
    personId: number,
    name: string,
    mail: string,
    login:string,
    contra:string,
    rol:string,
    enabled: boolean,
    created: Date,
    carreraId:number,
    authorities : Authorize[]
    
}

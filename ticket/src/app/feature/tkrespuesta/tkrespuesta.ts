import { Authority } from "../authority/authority";

export interface Tkrespuesta{
    tkrespuestaId: number,
    comment: string,
    yesno: boolean,
    datecreate: Date,
    needId: number,
    authorities: Authority[]
  
}
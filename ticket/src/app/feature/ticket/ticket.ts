import { Tip } from "../tip/tip";

export interface Ticket {
  ticketId: number,
  modulo: string,
  motivo: string,
  descripcion: string,
  userId: number,
  telefono: string,
  created: Date,
  enabled: boolean,
  tips:Tip[],
  // nameUser:string
}

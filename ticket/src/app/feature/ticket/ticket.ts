import { Tip } from "../tip/tip";

export interface Ticket {
  ticketId: number,
  name: string,
  carreraId: number,
  modulo: boolean,
  motivo: string,
  // sugerencia: string,
  // descripcion: string,
  telefono: string,
  created: Date,
  updates: Date,
  enabled: boolean,
  tips:Tip[]
}

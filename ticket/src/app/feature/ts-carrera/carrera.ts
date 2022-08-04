import { Estudiante } from "../authority/estudiante";

export interface Carrera {
  carreraId : number,
  name : string,
  created : Date,
  updated : Date,
  archived : boolean,
  enable : boolean,
  personId : number,
  carreraEstudiante : Estudiante[]
}

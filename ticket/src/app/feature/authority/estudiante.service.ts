import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(
    private http : HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }
  private url : string = "http://localhost:8080/api/estudiante";

  public findById(id: number): Observable<Estudiante>{
    return this.http.get<Estudiante>(this.url+"/findById/"+id, this.httpOptions);
  }

  public findAll(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term : string): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.url+"/findByName/"+term, this.httpOptions);
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './ts-usuario-combobox';

@Injectable({
  providedIn: 'root'
})
export class TsUsuarioComboboxService {

  constructor(
    private http : HttpClient
  ) { }

  private HttpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/user";

  public findById(id: number):Observable<Usuario>{
    return this.http.post<Usuario>(this.url+"/findById/"+id, this.HttpOptions);
  }

  public findAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url+"/findAll", this.HttpOptions);
  }
}

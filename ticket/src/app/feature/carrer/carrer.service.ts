import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera} from './carrer';

@Injectable({
  providedIn: 'root'
})
export class CarrerComboboxService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/carrera";



  public findById(id: number): Observable<Carrera>{
    return this.http.get<Carrera>(this.url+"/findById/"+id, this.httpOptions);
  }



  public findAll(): Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.url+"/findAll/", this.httpOptions);
  }


}

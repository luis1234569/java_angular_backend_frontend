import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Career } from './career';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/career";



  public findById(id: number): Observable<Career>{
    return this.http.get<Career>(this.url+"/findById/"+id, this.httpOptions);
  }



  public findAll(): Observable<Career[]>{
    return this.http.get<Career[]>(this.url+"/findAll", this.httpOptions);
  }


}

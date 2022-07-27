import { Injectable } from '@angular/core';
import { Tsticket } from './ts-ticket';
import { Observable } from 'rxjs';

// private url: string = "http://localhost:8080/api/tsticket";
// private url: string = "http://localhost:8080/api/tsticket";
// private url: string = "http://localhost:8080/api/tsticket";

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TsticketService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/tsticket";

  public save(tsticket: Tsticket): Observable<Tsticket>{
    return this.http.post<Tsticket>(this.url+"/save", tsticket, this.httpOptions);
  }

  public findById(id: number): Observable<Tsticket>{
    return this.http.get<Tsticket>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Tsticket>{
    return this.http.delete<Tsticket>(this.url+"/deleteById/"+id, this.httpOptions);
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Need } from './need';

@Injectable({
  providedIn: 'root'
})
export class NeedService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/need"


  public findById(id: number): Observable<Need>{
    return this.http.get<Need>(this.url+"/findById"+id, this.httpOptions);
  }


  public findAll(): Observable<Need[]>{
    return this.http.get<Need[]>(this.url+"/findAll",this.httpOptions);
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authorize } from './authorize';



@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/authorize";



  public findById(id: number): Observable<Authorize>{
    return this.http.get<Authorize>(this.url+"/findById/"+id, this.httpOptions);
  }



  public findAll(): Observable<Authorize[]>{
    return this.http.get<Authorize[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string): Observable<Authorize[]>{
    return this.http.get<Authorize[]>(this.url+"/findByName/"+term, this.httpOptions);
  }
}
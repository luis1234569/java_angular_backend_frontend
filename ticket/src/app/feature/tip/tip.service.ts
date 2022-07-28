import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tip } from './tip';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/tip";



  public findById(id: number): Observable<Tip>{
    return this.http.get<Tip>(this.url+"/findById/"+id, this.httpOptions);
  }

  public findAll(): Observable<Tip[]>{
    return this.http.get<Tip[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string): Observable<Tip[]>{
    return this.http.get<Tip[]>(this.url+"/findByName/"+term, this.httpOptions);
  }

}

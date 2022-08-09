import { Injectable } from '@angular/core';
import { Tkrespuesta } from './tkrespuesta';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TkrespuestaService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/tkrespuesta"

  //save

  public save (tkrespuesta : Tkrespuesta): Observable<Tkrespuesta>{
    return this.http.post<Tkrespuesta>(this.url+"/save", tkrespuesta, this.httpOptions);
  }

  public findById(id: number): Observable<Tkrespuesta>{
    return this.http.get<Tkrespuesta>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Tkrespuesta>{
    return this.http.delete<Tkrespuesta>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  public findAll(): Observable<Tkrespuesta[]>{
    return this.http.get<Tkrespuesta[]>(this.url+"/findAll",this.httpOptions);
  }

  public findByComment(term: String): Observable<Tkrespuesta[]>{
    return this.http.get<Tkrespuesta[]>(this.url+"/findByComment"+term, this.httpOptions);
  }

}

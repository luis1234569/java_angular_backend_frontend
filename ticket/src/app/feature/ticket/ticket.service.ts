import { Injectable } from '@angular/core';
import { Ticket } from './ticket';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketService {



  constructor(
    private http: HttpClient,
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/ticket";

  public save(ticket: Ticket): Observable<Ticket>{
    return this.http.post<Ticket>(this.url+"/save", ticket, this.httpOptions);
  }

  public findById(id: number): Observable<Ticket>{
    return this.http.get<Ticket>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Ticket>{
    return this.http.delete<Ticket>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  public findByMotivo(term: string): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.url+"/findByMotivo/"+term, this.httpOptions);
  }

  public findAll(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.url+"/findAll", this.httpOptions);
  }


}

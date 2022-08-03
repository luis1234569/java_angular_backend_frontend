import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/user";

  public save(person: User): Observable<User>{
    return this.http.post<User>(this.url+"/save", person, this.httpOptions);
  }

  public findById(id: number): Observable<User>{
    return this.http.get<User>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<User>{
    return this.http.delete<User>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  public findAll (): Observable <User[]>{
    return this.http.get<User[]>(this.url+"/findAll",this.httpOptions);
  }

  public findByName(term: string): Observable<User[]>{
    return this.http.get<User[]>(this.url+"/findByName/"+term, this.httpOptions)
  }
}

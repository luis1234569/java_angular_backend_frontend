import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

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



  public findById(id: number): Observable<User>{
    return this.http.get<User>(this.url+"/findById/"+id, this.httpOptions);
  }

  public findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.url+"/findAll", this.httpOptions);
  }


}

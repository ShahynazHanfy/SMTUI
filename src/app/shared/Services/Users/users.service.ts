import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { User } from '../../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient:HttpClient) { }
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'
       
  })};

  getAllUsers():Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${environment.Domain}api/Users`,this.httpHeader);
  }
  GetUnregisteredUsers():Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${environment.Domain}api/Users/GetUnregisteredUsers`,this.httpHeader);
  }
  addUser(NewUser:User)
  {
    return this.httpClient.post(`${environment.Domain}api/Authenticate/register`,NewUser,this.httpHeader)
  }
  delete(id)
  {
    return this.httpClient.delete(`${environment.Domain}api/Users/`+id,this.httpHeader)
  }
}

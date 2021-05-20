import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { EndUsers } from '../../Models/EndUsers';
@Injectable({
  providedIn: 'root'
})
export class EndUsersService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllEndUsers(): Observable<EndUsers[]> {
    return this.httpClient.get<EndUsers[]>(`${environment.EndUsers}`, this.httpHeader);
  }
  insertEndUser(EndUsers: EndUsers): Observable<EndUsers> {
    return this.httpClient.post<EndUsers>(`${environment.EndUsers}`, EndUsers, this.httpHeader);
  }
  deleteEndUser(id: number): Observable<EndUsers> {
    return this.httpClient.delete<EndUsers>(`${environment.EndUsers}/` + id, this.httpHeader);
  }
  updateEndUser(id: Number, endUser: EndUsers): Observable<EndUsers> {
    return this.httpClient.put<EndUsers>(`${environment.EndUsers}/` + id, endUser, this.httpHeader);
  }
  GetEndUserById(EndUsersID: number): Observable<EndUsers> {
    return this.httpClient.get<EndUsers>(`${environment.EndUsers}/`+EndUsersID, this.httpHeader)
  }
}

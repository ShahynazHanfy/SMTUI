import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultant } from 'app/shared/Models/Consultant';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllConsultants(): Observable<Consultant[]> {
    return this.httpClient.get<Consultant[]>(`${environment.Consultant}`, this.httpHeader);
  }
  insertConsultant(Consultant: Consultant): Observable<Consultant> {
    return this.httpClient.post<Consultant>(`${environment.Consultant}`, Consultant, this.httpHeader);
  }
  deleteConsultant(id: number): Observable<Consultant> {
    return this.httpClient.delete<Consultant>(`${environment.Consultant}/` + id, this.httpHeader);
  }
  updateConsultant(id: Number, consultant: Consultant): Observable<Consultant> {
    return this.httpClient.put<Consultant>(`${environment.Consultant}/` + id, consultant, this.httpHeader);
  }
  GetConsultantById(ConsultantID: number): Observable<Consultant> {
    return this.httpClient.get<Consultant>(`${environment.Consultant}/`+ConsultantID, this.httpHeader)
  }
}

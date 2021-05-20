import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { Governorates } from '../../Models/Governorates';
@Injectable({
  providedIn: 'root'
})
export class GovernoratesService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllGovernorates(): Observable<Governorates[]> {
    return this.httpClient.get<Governorates[]>(`${environment.Governorates}`, this.httpHeader);
  }
  insertGovernorate(Governorates: Governorates): Observable<Governorates> {
    return this.httpClient.post<Governorates>(`${environment.Governorates}`, Governorates, this.httpHeader);
  }
  deleteGovernorate(id: number): Observable<Governorates> {
    return this.httpClient.delete<Governorates>(`${environment.Governorates}/` + id, this.httpHeader);
  }
  updateGovernorate(id: Number, governorate: Governorates): Observable<Governorates> {
    return this.httpClient.put<Governorates>(`${environment.Governorates}/` + id, governorate, this.httpHeader);
  }
  GetGovernorateById(GovernoratesID: number): Observable<Governorates> {
    return this.httpClient.get<Governorates>(`${environment.Governorates}/` + GovernoratesID, this.httpHeader)
  }
}
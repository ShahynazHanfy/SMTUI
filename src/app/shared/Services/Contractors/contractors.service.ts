import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { Contractors } from '../../Models/Contractors';
@Injectable({
  providedIn: 'root'
})
export class ContractorsService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllContractors(): Observable<Contractors[]> {
    return this.httpClient.get<Contractors[]>(`${environment.Contractors}`, this.httpHeader);
  }
  insertContractor(Contractors: Contractors): Observable<Contractors> {
    return this.httpClient.post<Contractors>(`${environment.Contractors}`, Contractors, this.httpHeader);
  }
  deleteContractor(id: number): Observable<Contractors> {
    return this.httpClient.delete<Contractors>(`${environment.Contractors}/` + id, this.httpHeader);
  }
  updateContractor(id: Number, contractors: Contractors): Observable<Contractors> {
    return this.httpClient.put<Contractors>(`${environment.Contractors}/` + id, contractors, this.httpHeader);
  }
  GetContractorById(ContractorsID: number): Observable<Contractors> {
    return this.httpClient.get<Contractors>(`${environment.Contractors}/`+ContractorsID, this.httpHeader)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfferStatus } from 'app/shared/Models/OfferStatus';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferStatusNameService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllOfferStatuses(): Observable<OfferStatus[]> {
    return this.httpClient.get<OfferStatus[]>(`${environment.OfferStatus}`, this.httpHeader);
  }
  insertOfferStatus(OfferStatus: OfferStatus): Observable<number> {
    return this.httpClient.post<number>(`${environment.OfferStatus}`, OfferStatus, this.httpHeader);
  }
  deleteOfferStatus(id: number): Observable<OfferStatus> {
    return this.httpClient.delete<OfferStatus>(`${environment.OfferStatus}/` + id, this.httpHeader);
  }
  updateOfferStatus(id: Number, OfferStatus: OfferStatus): Observable<OfferStatus> {
    return this.httpClient.put<OfferStatus>(`${environment.OfferStatus}/` + id, OfferStatus, this.httpHeader);
  }
  GetOfferStatusById(OfferStatusID: number): Observable<OfferStatus> {
    return this.httpClient.get<OfferStatus>(`${environment.OfferStatus}/` + OfferStatusID, this.httpHeader)
  }
}
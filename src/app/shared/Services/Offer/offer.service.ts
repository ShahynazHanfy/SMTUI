import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from 'app/shared/Models/Offer';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllOffers(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(`${environment.Offer}`, this.httpHeader);
  }
  // insertOffer(Offer: Offer): Observable<number> {
  //   return this.httpClient.post<number>(`${environment.Offer}`, Offer, this.httpHeader);
  // }
  insertOffer(offer: Offer): Observable <Offer>{
    return this.httpClient.post<Offer> (`${environment.Offer}`,offer,this.httpHeader) ;
  }
  deleteOffer(id: number): Observable<Offer> {
    return this.httpClient.delete<Offer>(`${environment.Offer}/` + id, this.httpHeader);
  }
  updateOffer(id: Number, Offer: Offer): Observable<Offer> {
    return this.httpClient.put<Offer>(`${environment.Offer}/` + id, Offer, this.httpHeader);
  }
  GetOfferById(OfferID: number): Observable<Offer> {
    return this.httpClient.get<Offer>(`${environment.Offer}/` + OfferID, this.httpHeader)
  }}

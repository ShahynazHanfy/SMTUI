import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfferDocuments } from 'app/shared/Models/OfferDocuments';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferDocumentsService {
  
  constructor(private httpClient : HttpClient) { }
  
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllOfferDocumentsByOfferId(offerId:number): Observable <OfferDocuments[]>{
    return this.httpClient.get<OfferDocuments[]> (`${environment.GetAllOfferDocumentsByOfferId}`+ offerId,this.httpHeader) ;
  }

  GetAllOfferDocuments(): Observable <OfferDocuments[]>{
    return this.httpClient.get<OfferDocuments[]> (`${environment.GetAllOfferDocumentsByOfferId}`,this.httpHeader) ;
  }
  deleteOfferDocument(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.OfferDocuments}${id}`, this.httpHeader);
  }
  downloadInFile(fileName): any {
    return this.httpClient.get(`${environment.Domain}wwwroot/documentFiles/${fileName}`, this.httpHeader);
  }
  // insertOfferDescription(offerDescription:OfferDescription): Observable <OfferDescription>{
  //   return this.httpClient.post<OfferDescription> (`${environment.OfferDescription}`,offerDescription,this.httpHeader) ;
  // }
  insertOfferDocuments(offerDescription:OfferDocuments): Observable <OfferDocuments>{
    return this.httpClient.post<OfferDocuments> (`${environment.GetAllOfferDocumentsByOfferId}`,offerDescription,this.httpHeader) ;
  }
}

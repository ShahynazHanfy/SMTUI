import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datasheet } from 'app/shared/Models/Datasheet';
import { OfferDocuments } from 'app/shared/Models/OfferDocuments';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasheetService {


  constructor(private httpClient : HttpClient) { }
  
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllOfferDocuments(): Observable <OfferDocuments[]>{
    return this.httpClient.get<OfferDocuments[]> (`${environment.OfferDocuments}`,this.httpHeader) ;
  }
  insertOfferDocuments(offerDocuments:OfferDocuments[]): Observable <OfferDocuments[]>{
    return this.httpClient.post<OfferDocuments[]> (`${environment.OfferDocuments}`,offerDocuments,this.httpHeader) ;
  }
  GetDocumentByName(docName:string): Observable <string>{
    console.log("path",docName)
    return this.httpClient.get<string> (`${environment.GetDocument}`+ docName,this.httpHeader) ;
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datasheet } from 'app/shared/Models/Datasheet';
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
  GetAllDatasheet(): Observable <Datasheet[]>{
    return this.httpClient.get<Datasheet[]> (`${environment.Datasheet}`,this.httpHeader) ;
  }
  insertDatasheet(Datasheet:Datasheet): Observable <Datasheet>{
    return this.httpClient.post<Datasheet> (`${environment.Datasheet}`,Datasheet,this.httpHeader) ;
  }
  GetDocumentByName(docName:string): Observable <string>{
    console.log("path",docName)
    return this.httpClient.get<string> (`${environment.GetDocument}`+ docName,this.httpHeader) ;
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfferDescription } from 'app/shared/Models/OfferDescriptions';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferDescriptionService {

  constructor(private httpClient : HttpClient) { }
  
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllOfferDescriptions(): Observable <OfferDescription[]>{
    return this.httpClient.get<OfferDescription[]> (`${environment.OfferDescription}`,this.httpHeader) ;
  }
  // insertOfferDescription(offerDescription:OfferDescription): Observable <OfferDescription>{
  //   return this.httpClient.post<OfferDescription> (`${environment.OfferDescription}`,offerDescription,this.httpHeader) ;
  // }
  insertOfferDescription(offerDescription:OfferDescription): Observable <OfferDescription>{
    return this.httpClient.post<OfferDescription> (`${environment.OfferDescription}`,offerDescription,this.httpHeader) ;
  }
  // GetDescriptionsByProjectId(projectId:number): Observable <ProjectDescription[]>{
  //   return this.httpClient.get<ProjectDescription[]> (`${environment.GetDescriptionsByProjectId}${projectId}`,this.httpHeader) ;
  // }
  // GetDescriptionsByProjectUpdateId(projectUpdateId:number): Observable <ProjectDescription[]>{
  //   return this.httpClient.get<ProjectDescription[]> (`${environment.GetDescriptionsByProjectUpdateId}${projectUpdateId}`,this.httpHeader) ;
  // }
}

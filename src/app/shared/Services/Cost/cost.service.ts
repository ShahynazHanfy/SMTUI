import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectCost } from 'app/shared/Models/ProjectCost';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostService {

  constructor(private httpClient : HttpClient) { }
  
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllProjectCost(): Observable <ProjectCost[]>{
    return this.httpClient.get<ProjectCost[]> (`${environment.projectCost}`,this.httpHeader) ;
  }
  insertProjectCost(ProjectCost: ProjectCost): Observable<number> {
    return this.httpClient.post<number>(`${environment.projectCost}`, ProjectCost, this.httpHeader);
  }
  // GetDocumentByName(docName:string): Observable <string>{
  //   console.log("path",docName)
  //   return this.httpClient.get<string> (`${environment.GetDocument}`+ docName,this.httpHeader) ;
  // }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { ProjectDescription } from '../../Models/ProjectDescripton';

@Injectable({
  providedIn: 'root'
})
export class ProjectDescriptionService {

  constructor(private httpClient : HttpClient) { }
  
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllProjectDescriptions(): Observable <ProjectDescription[]>{
    return this.httpClient.get<ProjectDescription[]> (`${environment.ProjectDescription}`,this.httpHeader) ;
  }
  insertProjectDescription(projectDescription:ProjectDescription): Observable <ProjectDescription>{
    return this.httpClient.post<ProjectDescription> (`${environment.ProjectDescription}`,projectDescription,this.httpHeader) ;
  }
  GetDescriptionsByProjectId(projectId:number): Observable <ProjectDescription[]>{
    return this.httpClient.get<ProjectDescription[]> (`${environment.GetDescriptionsByProjectId}${projectId}`,this.httpHeader) ;
  }
  GetDescriptionsByProjectUpdateId(projectUpdateId:number): Observable <ProjectDescription[]>{
    return this.httpClient.get<ProjectDescription[]> (`${environment.GetDescriptionsByProjectUpdateId}${projectUpdateId}`,this.httpHeader) ;
  }
}

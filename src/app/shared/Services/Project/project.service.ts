import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { Project } from '../../Models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient : HttpClient) { }
  
  httpHeader={headers: new HttpHeaders({
    'content-type':'application/json',
    'Accept': '*/*'  
  })};
  GetAllProjects(): Observable <Project[]>{
    return this.httpClient.get<Project[]> (`${environment.Project}`,this.httpHeader) ;
  }
  insertProject(project:Project): Observable <Project>{
    return this.httpClient.post<Project> (`${environment.Project}`,project,this.httpHeader) ;
  }
  deleteProject(id: number): Observable<Project> {
    return this.httpClient.delete<Project>(`${environment.Project}/` + id, this.httpHeader);
  }
  updateProject(id: Number, project: Project): Observable<Project> {
    return this.httpClient.put<Project>(`${environment.Project}/` + id, project, this.httpHeader);
  }
  GetProjectById(ProjectID: number): Observable<Project> {
    return this.httpClient.get<Project>(`${environment.Project}/` + ProjectID, this.httpHeader)
  }
  AcceptProject(ProjectId:number): Observable<Project> {
    return this.httpClient.get<Project>(`${environment.AcceptProject}` + ProjectId, this.httpHeader)
  }
  GetAllAcceptedProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${environment.GetAllAcceptedProjects}`, this.httpHeader)
  }

}

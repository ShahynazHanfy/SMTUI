import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { ProjectSystem } from '../../Models/ProjectSystem';

@Injectable({
  providedIn: 'root'
})
export class ProjectSystemService {


  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllProjectSystems(): Observable<ProjectSystem[]> {
    return this.httpClient.get<ProjectSystem[]>(`${environment.ProjectSystem}`, this.httpHeader);
  }
  insertProjectSystems(ProjectSystem: ProjectSystem): Observable<ProjectSystem> {
    return this.httpClient.post<ProjectSystem>(`${environment.ProjectSystem}`, ProjectSystem, this.httpHeader);
  }
  deleteProjectSystem(id: number): Observable<ProjectSystem> {
    return this.httpClient.delete<ProjectSystem>(`${environment.ProjectSystem}/` + id, this.httpHeader);
  }
  updateProjectSystems(id: Number, ProjectSystem: ProjectSystem): Observable<ProjectSystem> {
    return this.httpClient.put<ProjectSystem>(`${environment.ProjectSystem}/` + id, ProjectSystem, this.httpHeader);
  }
  GetProjectSystemById(ProjectSystemID: number): Observable<ProjectSystem> {
    return this.httpClient.get<ProjectSystem>(`${environment.ProjectSystem}/` + ProjectSystemID, this.httpHeader)
  }
}

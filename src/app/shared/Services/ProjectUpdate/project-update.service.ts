import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { ProjectUpdate } from '../../Models/ProjectUpdate';

@Injectable({
  providedIn: 'root'
})
export class ProjectUpdateService {


  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllProjectUpdates(): Observable<ProjectUpdate[]> {
    return this.httpClient.get<ProjectUpdate[]>(`${environment.ProjectUpdate}`, this.httpHeader);
  }
  insertProjectUpdate(ProjectUpdate: ProjectUpdate): Observable<ProjectUpdate> {
    return this.httpClient.post<ProjectUpdate>(`${environment.ProjectUpdate}`, ProjectUpdate, this.httpHeader);
  }
  deleteProjectUpdate(id: number): Observable<ProjectUpdate> {
    return this.httpClient.delete<ProjectUpdate>(`${environment.ProjectUpdate}/` + id, this.httpHeader);
  }
  updateProjectUpdate(id: Number, ProjectUpdate: ProjectUpdate): Observable<ProjectUpdate> {
    return this.httpClient.put<ProjectUpdate>(`${environment.ProjectUpdate}/` + id, ProjectUpdate, this.httpHeader);
  }
  GetProjectUpdate(ProjectUpdateID: number): Observable<ProjectUpdate> {
    return this.httpClient.get<ProjectUpdate>(`${environment.ProjectUpdate}/` + ProjectUpdateID, this.httpHeader)
  }
  GetAllUpdatesByProjectId(projectId: number): Observable<ProjectUpdate[]> {
    return this.httpClient.get<ProjectUpdate[]>(`${environment.GetAllUpdatesByProjectId}/${projectId}`, this.httpHeader);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { ProjectStatus } from '../../Models/ProjectStatus';
@Injectable({
  providedIn: 'root'
})
export class ProjectStatusService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllProjectStatus(): Observable<ProjectStatus[]> {
    return this.httpClient.get<ProjectStatus[]>(`${environment.ProjectStatus}`, this.httpHeader);
  }
  insertProjectStatus(ProjectStatus: ProjectStatus): Observable<ProjectStatus> {
    return this.httpClient.post<ProjectStatus>(`${environment.ProjectStatus}`, ProjectStatus, this.httpHeader);
  }
  deleteProjectStatus(id: number): Observable<ProjectStatus> {
    return this.httpClient.delete<ProjectStatus>(`${environment.ProjectStatus}/` + id, this.httpHeader);
  }
  updateProjectStatus(id: Number, projectStatus: ProjectStatus): Observable<ProjectStatus> {
    return this.httpClient.put<ProjectStatus>(`${environment.ProjectStatus}/` + id, projectStatus, this.httpHeader);
  }
  GetProjectStatusById(ProjectStatusID: number): Observable<ProjectStatus> {
    return this.httpClient.get<ProjectStatus>(`${environment.ProjectStatus}/` + ProjectStatusID, this.httpHeader)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectComponentComponent } from '../../../layouts/project/project-component/project-component.component'
import { environment } from '../../../../../src/environments/environment';
import { ProjectComponentModel } from "../../Models/ProjectComponent";
@Injectable({
  providedIn: 'root'
})
export class ProjectComponentService {

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllProjectComponents(): Observable<ProjectComponentModel[]> {
    return this.httpClient.get<ProjectComponentModel[]>(`${environment.ProjectComponent}`, this.httpHeader);
  }
  insertProjectComponent(projectComponent: ProjectComponentModel): Observable<ProjectComponentModel> {
    return this.httpClient.post<ProjectComponentModel>(`${environment.ProjectComponent}`, projectComponent, this.httpHeader);
  }
  deleteProjectComponent(id: number): Observable<ProjectComponentModel> {
    return this.httpClient.delete<ProjectComponentModel>(`${environment.ProjectComponent}/`+id, this.httpHeader);
  }
  updateProjectComponent(id: Number, projectComponent: ProjectComponentModel): Observable<ProjectComponentModel> {
    return this.httpClient.put<ProjectComponentModel>(`${environment.ProjectComponent}/` + id, projectComponent, this.httpHeader);
  }
  GetProjectComponentById(ProjectComponentID: number): Observable<ProjectComponentModel> {
    return this.httpClient.get<ProjectComponentModel>(`${environment.ProjectComponent}/`+ProjectComponentID ,this.httpHeader)
  }

}

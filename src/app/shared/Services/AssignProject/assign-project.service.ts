import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssigneProject } from 'app/shared/Models/AssignedProject';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  AssignProjectService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllAssignProjects(): Observable<AssigneProject[]> {
    return this.httpClient.get<AssigneProject[]>(`${environment.AssigneProject}`, this.httpHeader);
  }
GetAssignProject(assignProjectId:number): Observable<AssigneProject> {
    return this.httpClient.get<AssigneProject>(`${environment.AssigneProject}`+assignProjectId, this.httpHeader);
  }
  GetAllAssignedProjectsByProjectId(ProjectId:number): Observable<AssigneProject[]> {
    return this.httpClient.get<AssigneProject[]>(`${environment.GetAllAssignedProjectsByProjectId}`+ProjectId, this.httpHeader);
  }
  // insertOffer(Offer: Offer): Observable<number> {
  //   return this.httpClient.post<number>(`${environment.Offer}`, Offer, this.httpHeader);
  // }
  GetAllAssignedProjectsByEmployeeId(EmpId:number): Observable<AssigneProject[]> {
    return this.httpClient.get<AssigneProject[]>(`${environment.GetAllAssignedProjectsByEmployeeId}`+ EmpId, this.httpHeader);
  }
  insertAssignProject(assignedProjects: AssigneProject): Observable<number> {
    return this.httpClient.post<number>(`${environment.AssigneProject}`, assignedProjects, this.httpHeader);
  }
  deleteAssignedProject(id: number): Observable<AssigneProject> {
    return this.httpClient.delete<AssigneProject>(`${environment.AssigneProject}` + id, this.httpHeader);
  }
  updateAssigneProject(id: Number, AssigneProject: AssigneProject): Observable<AssigneProject> {
    return this.httpClient.put<AssigneProject>(`${environment.AssigneProject}` + id, AssigneProject, this.httpHeader);
  }
  GetassignedProjectsById(AssigneProjectID: number): Observable<AssigneProject[]> {
    return this.httpClient.get<AssigneProject[]>(`${environment.AssigneProject}` + AssigneProjectID, this.httpHeader)
  }
}
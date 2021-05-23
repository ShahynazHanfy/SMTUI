import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { ProjectDocuments } from '../../Models/ProjectDocuments';

@Injectable({
  providedIn: 'root'
})
export class ProjectDocumentService {


  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };

  insertdocument(ProjectDocuments: ProjectDocuments[]): Observable<any> {
    return this.httpClient.post<any>(`${environment.ProjectDocument}`, ProjectDocuments, this.httpHeader);
  }
  // postProjectDocumentByProjectID(projdoc: ProjectDocuments[]): Observable<any> {

  //   return this.httpClient.post<any>(`${environment.postProjectDocumentByProjectID}`, projdoc, this.httpHeader);
  // }
  addFile(file): Observable<any> {
    const formData = new FormData();
    formData.append("file", file, file.name);

    return this.httpClient.post(`${environment.uploadFile}`, formData, this.httpHeader)
  }

  deletedocument(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.deletedocument}${id}`, this.httpHeader);
  }
  downloadInFile(fileName): any {
    return this.httpClient.get(`${environment.Domain}wwwroot/documentFiles/${fileName}`, this.httpHeader);
  }
  GetAllDocumentsByProjectID(ProjectID:Number): Observable <ProjectDocuments[]>{
    return this.httpClient.get<ProjectDocuments[]> (`${environment.ProjectDocumentByProjectID}${ProjectID}`,this.httpHeader) ;
  }
  GetAllDocumentsByProjectUpdateID(ProjectUpdateID:Number): Observable <ProjectDocuments[]>{
    return this.httpClient.get<ProjectDocuments[]> (`${environment.GetAllUpdatesByProjectUpdateId}${ProjectUpdateID}`,this.httpHeader) ;
  }
  GetLatestDocuments(projectId:Number): Observable <ProjectDocuments[]>{
    return this.httpClient.get<ProjectDocuments[]> (`${environment.GetLatestDocuments}${projectId}`,this.httpHeader) ;
  }
  // updatedocumentbyprojectid(documents:ProjectDocuments[]):Observable<ProjectDocuments[]>{
  //   return this.httpClient.put<ProjectDocuments[]>(`${environment.updatedocumectsbyprojectid}`,documents,this.httpHeader);
  // }

}

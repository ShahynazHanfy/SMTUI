import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { DocumentCategory } from '../../Models/DocumentCategory';

@Injectable({
  providedIn: 'root'
})
export class DocumentCategoryService {

  
  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };
  GetAllDocumentCategories(): Observable<DocumentCategory[]> {
    return this.httpClient.get<DocumentCategory[]>(`${environment.DocumentCategory}`, this.httpHeader);
  }
  insertDocumentCategory(DocumentCategoryObj: DocumentCategory): Observable<DocumentCategory> {
    return this.httpClient.post<DocumentCategory>(`${environment.DocumentCategory}`, DocumentCategoryObj, this.httpHeader);
  }
  deleteDocumentCategory(id: number): Observable<DocumentCategory> {
    return this.httpClient.delete<DocumentCategory>(`${environment.DocumentCategory}/` + id, this.httpHeader);
  }
  updateDocumentCategory(id: Number, DocumentCategoryObj: DocumentCategory): Observable<DocumentCategory> {
    return this.httpClient.put<DocumentCategory>(`${environment.DocumentCategory}/` + id, DocumentCategoryObj, this.httpHeader);
  }
  GetDocumentCategoryById(DocumentCategoryID: number): Observable<DocumentCategory> {
    return this.httpClient.get<DocumentCategory>(`${environment.DocumentCategory}/` + DocumentCategoryID, this.httpHeader)
  }
}

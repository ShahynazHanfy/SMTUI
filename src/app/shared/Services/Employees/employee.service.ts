import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profession } from 'app/shared/Models/Profession';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { Employee } from '../../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'

    })
  };
  GetAllEmployees(): Observable<Employee[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //"Authorization": "bearer " + localStorage.getItem('token')
      })
    };
    return this.httpclient.get<Employee[]>(`${environment.Domain}api/Users/GetAllEmployees`, httpOptions);
  }
  // GetEmpById(empId:number): Observable<Employee> {
  //   return this.httpclient.get<Employee>(`${environment.Employees}/`+empId, this.httpHeader)
  // }
  GetAllEmployeesByProfessionId(ProfessionId: number): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${environment.GetAllEmployeesByProfessionId}` + ProfessionId, this.httpHeader)
  }
  GetAllProfessions(): Observable<Profession[]> {
    return this.httpclient.get<Profession[]>(`${environment.GetAllProfessions}`, this.httpHeader)
  }

  GetEmpById(EndUsersID: number): Observable<Employee> {
    return this.httpclient.get<Employee>(`${environment.Employees}` + EndUsersID, this.httpHeader)
  }
}

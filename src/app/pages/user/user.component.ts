import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/shared/Models/Employee';
import { User } from 'app/shared/Models/user';
import { EmployeeService } from 'app/Shared/Services/Employees/employee.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    EmployeeObj: Employee
    empId:number
    constructor(private empService:EmployeeService){
        this.empId = Number(localStorage.getItem('empId')) 
        this.EmployeeObj = {
            email: '', address: '', code: '', dateOfBirth: '', emailCompany: '', facultyDepartmentId: 0, facultyDepartmentName: '', facultyId: 0,
            facultyName: '', gender: '', graduatioYear: '', hiringDateHiringDate: '', id: 0, listOfdocuments: [], maritalStatus: '', mobile: ''
            , name: '', nationalId: '', phone: '', photo: '', positionId: 0, positionLevelName: '', positionName: '', positionlevelId: 0,
            professionID: 0, relevantPhone: '', universityId: 0, universityName: ''
        }
        this.empService.GetEmpById(this.empId).subscribe(e=>{
            this.EmployeeObj = e
            console.log("Emp",this.EmployeeObj)
        })
    }
    ngOnInit() {
     
    }
    UpdateEmp(){
        console.log("employ",this.EmployeeObj)
    }
}

import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../../src/app/Shared/Models/Project';
import { ProjectStatus } from '../../../../../src/app/Shared/Models/ProjectStatus';
import { ProjectStatusService } from "../../../Shared/Services/ProjectStatus/project-status.service";
import { ProjectComponentService } from "../../../Shared/Services/ProjectComponent/project-component.service";
import { ProjectComponentModel } from '../../../../../src/app/Shared/Models/ProjectComponent';
import { EndUsers } from '../../../../../src/app/Shared/Models/EndUsers';
import { EndUsersService } from '../../../../../src/app/Shared/Services/EndUsers/end-users.service';
import { GovernoratesService } from '../../../../../src/app/Shared/Services/Governorates/governorates.service';
import { Governorates } from '../../../../../src/app/Shared/Models/Governorates';
import { ContractorsService } from '../../../../../src/app/Shared/Services/Contractors/contractors.service';
import { Contractors } from '../../../../../src/app/Shared/Models/Contractors';
import { ProjectService } from '../../../../../src/app/Shared/Services/Project/project.service';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectObj: Project
  lstEndUsers:EndUsers[]
  lstProjStatus: ProjectStatus[]
  lstProjComponent:ProjectComponentModel[]
  lstGovn:Governorates[]
  lstContractors:Contractors[]
  showTheFirstStepDialog:boolean=false
  uploadDocuments: boolean;

  constructor(private projStatusService:ProjectStatusService,
    private projectComponentService:ProjectComponentService,
    private EndUsersService:EndUsersService,
    private governorateService:GovernoratesService,
    private contractorService:ContractorsService,
    private projectService:ProjectService
    ) { }

  ngOnInit(): void {
 
    this.lstProjStatus = []
    this.lstProjComponent=[]
    this.lstEndUsers=[]
    this.lstGovn=[]
    this.lstContractors=[]

    this.projStatusService.GetAllProjectStatus().subscribe(e=>{
      this.lstProjStatus = e
    })
    this.projectComponentService.GetAllProjectComponents().subscribe(e=>{
      this.lstProjComponent=e
    })
    this.EndUsersService.GetAllEndUsers().subscribe(e=>{
      this.lstEndUsers = e
    })
    this.governorateService.GetAllGovernorates().subscribe(e=>{
      this.lstGovn = e
    })
    this.contractorService.GetAllContractors().subscribe(e=>{
      this.lstContractors=e
    })
    this.projectObj = {
      companyName: '', contractorName: '', contractorsId: 0, endUserContactName: '', endUsersId: 0,
      contractorContactName: '', projectComponentName: '', projectComponentsId: 0, projectCreationDate: new Date,
      governorateId: 0, projectName: '', projectStatusId: 1, rank: 0, governorateName: '', id: 0, projectStatusName: 'New'
    }
  }
  AddProject(){
    // this.projectService.insertProject(this.projectObj).subscribe(e=>{
    //   console.log("complete the first step")
    //   this.showTheFirstStepDialog = true
    //   this.ngOnInit()
    // })
    this.showTheFirstStepDialog = true
    this.uploadDocuments = true

  }


}

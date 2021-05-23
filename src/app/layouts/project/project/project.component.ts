import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Contractors } from '../../../../../src/app/Shared/Models/Contractors';
import { EndUsers } from '../../../../../src/app/Shared/Models/EndUsers';
import { Governorates } from '../../../../../src/app/Shared/Models/Governorates';
import { Project } from '../../../../../src/app/Shared/Models/Project';
import { ProjectStatus } from '../../../../../src/app/Shared/Models/ProjectStatus';
import { ProjectStatusService } from "../../../Shared/Services/ProjectStatus/project-status.service";
import { ProjectComponentService } from "../../../Shared/Services/ProjectComponent/project-component.service";
import { ProjectComponentModel } from '../../../../../src/app/Shared/Models/ProjectComponent';
import { EndUsersService } from '../../../../../src/app/Shared/Services/EndUsers/end-users.service';
import { GovernoratesService } from '../../../../../src/app/Shared/Services/Governorates/governorates.service';
import { ContractorsService } from '../../../../../src/app/Shared/Services/Contractors/contractors.service';
import { ProjectService } from '../../../../../src/app/Shared/Services/Project/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { of } from 'rxjs';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ProjectDescription } from '../../../../../src/app/Shared/Models/ProjectDescripton';
import { ProjectDocuments } from '../../../../../src/app/Shared/Models/ProjectDocuments';
import { ProjectDocumentService } from '../../../../../src/app/Shared/Services/ProjectDocument/project-document.service';
import { environment } from '../../../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DocumentCategory } from '../../../../../src/app/Shared/Models/DocumentCategory';
import { DocumentCategoryService } from '../../../../../src/app/Shared/Services/DocumentCategory/document-category.service';
import { ProjectDescriptionService } from '../../../../../src/app/Shared/Services/ProjectDescription/project-description.service';
import { ProjectSystemService } from '../../../../../src/app/Shared/Services/ProjectSystem/project-system.service';
import { ProjectSystem } from '../../../../../src/app/Shared/Models/ProjectSystem';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {
  activeIndex: number = 0;
  documentsFlag: boolean = false
  deatailsFlag: boolean = false
  DescriptionFlag: boolean = false
  ConfirmationFlag: boolean = false
  projectId: number
  message: string;
  ProjectDescriptionObj: ProjectDescription
  projectList: Project[]
  projectObj: Project
  lstEndUsers: EndUsers[]
  lstProjStatus: ProjectStatus[]
  lstProjComponent: ProjectComponentModel[]
  lstGovn: Governorates[]
  lstContractors: Contractors[]
  userId: string = localStorage.getItem('userId')
  userName: string = localStorage.getItem('userName')
  project: Project
  showTheFirstStepDialog: boolean;
  uploadDocuments: boolean;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  items: MenuItem[];
  docproject: ProjectDocuments
  docprojectToDB: ProjectDocuments
  lstoddocproj: ProjectDocuments[]
  lstDocumentCategory: DocumentCategory[]
  selectedColumns: ProjectComponent[];
  projectSystem: ProjectSystem
  displayBasic: boolean;

  constructor(private route: Router, private projStatusService: ProjectStatusService,
    private projectComponentService: ProjectComponentService,
    private EndUsersService: EndUsersService,
    private governorateService: GovernoratesService,
    private contractorService: ContractorsService,
    private projectService: ProjectService,
    private _formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private projectdocumentService: ProjectDocumentService,
    private projectDescriptionService: ProjectDescriptionService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private DocumentCategoryService: DocumentCategoryService,
    private ProjectSystemService: ProjectSystemService,
   ) { }
   activityValues: number[] = [0,100];

  ngOnInit(): void {

    this.items = [{
      label: 'Details',
      command: (event: any) => {
        this.activeIndex = 0;
      }
    },
    {
      label: 'Documents',
      command: (event: any) => {
        this.activeIndex = 1;
      }
    },
    {
      label: 'Confirmation',
      command: (event: any) => {
        this.activeIndex = 3;
      }
    }
    ];
    this.lstProjStatus = []
    this.lstoddocproj = []
    this.lstProjComponent = []
    this.lstEndUsers = []
    this.lstGovn = []
    this.lstDocumentCategory = []
    this.lstContractors = []

    this.ProjectDescriptionObj =
    {
      id: 0, projectName: '', description: '', userName: this.userName,
      descriptionDate: new Date, projectId: 0, projectUpdateId: 0, userId: this.userId
    }
    this.projectObj = {lstprojectSystems:[],
      companyName: '', contractorName: '', contractorsId: 0, endUserContactName: '', endUsersId: 0,
      contractorContactName: '', projectComponentName: '', projectComponentsId: 0, projectCreationDate: new Date,
      governorateId: 0, projectName: '', projectStatusId: 1, rank: 0, governorateName: '', id: 0, projectStatusName: 'New'
    }
    this.projectSystem = {
      ProjectId: 0, id: 0, LstprojectComponents: []
    }
    this.docproject = {
      projectUpdateId: 0, documentsCategoryId: 0, documentFile: '', id: 0, projectId: 0, documentsCategoryName: ''
    }
    this.project = {lstprojectSystems:[],
      id: 0, projectStatusName: '', companyName: '', contractorName: '', contractorContactName: '', contractorsId: 0, endUserContactName: '', endUsersId: 0,
      projectComponentName: '', projectComponentsId: 0, projectCreationDate: new Date, projectName: '', projectStatusId: 0, rank: 0, governorateId: 0, governorateName: ''
    }
    this.projectService.GetAllProjects().subscribe(e => {
      this.projectList = e, console.log("projectList", this.projectList)
      this.projectList.forEach(customer => customer.projectCreationDate = new Date(customer.projectCreationDate));
    })
    this.projStatusService.GetAllProjectStatus().subscribe(e => {
      this.lstProjStatus = e
    })
    this.projectComponentService.GetAllProjectComponents().subscribe(e => {
      this.lstProjComponent = e
    })
    this.EndUsersService.GetAllEndUsers().subscribe(e => {
      this.lstEndUsers = e
    })
    this.governorateService.GetAllGovernorates().subscribe(e => {
      this.lstGovn = e
    })
    this.contractorService.GetAllContractors().subscribe(e => {
      this.lstContractors = e
    })
    this.DocumentCategoryService.GetAllDocumentCategories().subscribe(e => {
      this.lstDocumentCategory = e
    })
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  showBasicDialog(id) {
    this.displayBasic = true;
    this.projectService.GetProjectById(id).subscribe(
      data => { this.projectObj = data ,console.log("projectObj",this.projectObj)},
      error => { console.log(error) }
    );
  }
  goToProjCom() {
    this.route.navigate(['/projectComponent']);

  }
  AddNewProject() {
    this.route.navigate(['/addProject']);
  }
  search(term: string) {

  }
  colChanges() {
    console.log("selectedColumns", this.selectedColumns)
  }
  AddProject() {
    this.projectObj.contractorsId = Number(this.projectObj.contractorsId)
    this.projectObj.endUsersId = Number(this.projectObj.endUsersId)
    this.projectObj.governorateId = Number(this.projectObj.governorateId)
    this.projectObj.projectComponentsId = Number(this.projectObj.projectComponentsId)
    this.projectObj.projectStatusId = Number(this.projectObj.projectStatusId)

    let promise = new Promise((resolve, reject) => {
      this.projectService.insertProject(this.projectObj).toPromise()
        .then(
          res => { // Success it returns project id as a res
            this.projectId = this.ProjectDescriptionObj.projectId = Number(res)
            console.log("res Id", this.ProjectDescriptionObj.projectId)
            this.projectDescriptionService.insertProjectDescription(this.ProjectDescriptionObj).toPromise()
            resolve('cons');
          },
          msg => { // Error
            reject(msg);
          }
        ).then(
          res => { // For save projectComponent
            this.projectSystem.ProjectId = this.projectId
            this.projectSystem.LstprojectComponents = this.selectedColumns
            this.ProjectSystemService.insertProjectSystems(this.projectSystem).toPromise()
            resolve('cons');
          },
          msg => { // Error
            reject(msg);
          }
        )
        .then(
          response => { // Success
            this.lstoddocproj.forEach(element => {
              element.projectId = this.projectId
            });
            this.projectdocumentService.insertdocument(this.lstoddocproj).toPromise()
            resolve('cons');
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
    // this.showTheFirstStepDialog = true
    // this.uploadDocuments = true

  }
  TrackprojComponent(index, item) {
    return item;
  }
  TrackProjectStatusName(index, item) {
    return item;
  }
  NextStep() {
    this.activeIndex = this.activeIndex + 1
    console.log("projDesc", this.ProjectDescriptionObj)
  }
  PreviousStep() {
    this.activeIndex = this.activeIndex - 1
  }
  Savedoctolist() {
    console.log("docProject", this.docproject)
    if (this.docproject.documentsCategoryId != 0 && this.docproject.documentFile != '') {
      this.docproject.documentsCategoryId = Number(this.docproject.documentsCategoryId)
      this.lstDocumentCategory.forEach(element => {
        if (element.id == this.docproject.documentsCategoryId) {
          this.docproject.documentsCategoryName = element.categoryName
        }

      });
      this.lstoddocproj.push(this.docproject);
      this.docproject = {
        documentsCategoryId: 0, projectUpdateId: 0, id: 0, documentFile: '', projectId: 0, documentsCategoryName: ''
      };
    }
    else {
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select Correct Category and File' });

    }

  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.docproject.documentFile = fileToUpload.name;
    console.log(fileToUpload.name)

    this.httpClient.post(environment.uploadFile, formData)
      .subscribe(res => {
        console.log(res)
        // alert('Uploaded Successfully.');
        // this.messageService.add({ severity: 'success', key: "tc", summary: 'Uploaded', detail: 'Uploaded Successfully' });

      });
  }
  deleteDocFromList(doc) {
    this.lstoddocproj = this.lstoddocproj.filter(v => v != doc);
  }
  clear(table: Table) {
    table.clear();
}
tech($event)
{
console.log("filter",$event.value);
}

customFilterCallback(filter: (a) => void, value: any): void {
 // this.stopListening = true;

 console.log("value",value);
  filter(value);
//  this.stopListening = false;
}
}




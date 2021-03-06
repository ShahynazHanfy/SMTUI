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
import { ToastrService } from 'ngx-toastr';
import { Consultant } from 'app/shared/Models/Consultant';
import { ConsultantService } from 'app/shared/Services/Consultant/consultant.service';
import { ProjectComponentComponent } from 'app/components/project-component/project-component.component';
import { AssignProjectService } from 'app/shared/Services/AssignProject/assign-project.service';
import { AssigneProject } from 'app/shared/Models/AssignedProject';
import { DatePipe } from '@angular/common';
import { promise } from 'selenium-webdriver';

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
  ProjectDescriptionDeadline: ProjectDescription
  projectList: Project[]
  projectListForSales:Project[]
  projectDescriptionList: ProjectDescription[]
  LstprojectDescription: ProjectDescription[]
  projectObj: Project
  lstEndUsers: EndUsers[]
  lstProjStatus: ProjectStatus[]
  lstProjComponent: ProjectComponentModel[]
  lstGovn: Governorates[]
  lstContractors: Contractors[]
  userId: string = localStorage.getItem('userId')
  userName: string = localStorage.getItem('userName')
  EmpId: number 
  role: string;
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
  selectedColumns: ProjectComponentModel[];
  projectSystem: ProjectSystem
  displayBasic: boolean;
  lstFrom1To100: number[]
  AcceptedProject: boolean = false
  lstConsultatnt: Consultant[]
  displayContractor: boolean = false;
  contractorObj: Contractors
  displayEndUsers: boolean;
  EndUsersObj: EndUsers
  displayConsultant: boolean;
  ConsultantObj: Consultant
  consultantObj: Consultant
  acceptdescription: boolean;
  showCalender: boolean = false
  acceptProjectId: any;
  projectDescritionFlag: boolean;
  ViewAssignedProjectFlag: boolean;
  showCalenderDialog: boolean = false
  lstAssignedProjectsForEmployee: AssigneProject[]
  AssignedProjectsDec: AssigneProject
  maxDate: string;
  deadLine: Date = new Date();
  year: number;
  month: number;
  day: number;
  strDate: string = ''
  ViewAssignedProjectForUserFlag: boolean;
  ViewAssignedDescFlag: boolean;
  ViewAssignedProjectFlag2: boolean;
  constructor(private route: Router, private projStatusService: ProjectStatusService,
    private projectComponentService: ProjectComponentService,
    private EndUsersService: EndUsersService,
    private governorateService: GovernoratesService,
    private contractorService: ContractorsService,
    private projectService: ProjectService,
    private _formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private toastr: ToastrService,
    private projectdocumentService: ProjectDocumentService,
    private projectDescriptionService: ProjectDescriptionService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private DocumentCategoryService: DocumentCategoryService,
    private ProjectSystemService: ProjectSystemService,
    private ContractorsService: ContractorsService,
    private ConsultantService: ConsultantService,
    private assignProjectService: AssignProjectService,
    private datePipe: DatePipe

  ) { }
  activityValues: number[] = [0, 100];

  ngOnInit(): void {
    //this.deadLine = new Date();
    console.log("this.deadLine", this.deadLine);
    this.strDate = this.datePipe.transform(this.deadLine, 'dd/MM/yyyy');
    console.log("this.strDate", this.strDate);
    // this.year = this.deadLine.getFullYear();
    // this.month = this.deadLine.getMonth();
    var dateitems = this.strDate.split('/');
    this.day = Number(dateitems[0]);
    this.month = Number(dateitems[1]);
    this.year = Number(dateitems[2]);

    console.log("dateitems", dateitems[0]);

    //  console.log("this.day",this.day)
    this.maxDate = (this.year) + "-" + (this.month) + "-" + (this.day + 4)
    console.log("maxDate", this.maxDate);
    this.EmpId = Number(localStorage.getItem('empId')) 
    this.role = localStorage.getItem('roles');
    console.log("this.role", this.role)
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
      label: 'Description',
      command: (event: any) => {
        this.activeIndex = 2;
      }
    }
    ];
    this.projectListForSales=[]
    this.lstProjStatus = []
    this.lstoddocproj = []
    this.lstProjComponent = []
    this.lstEndUsers = []
    this.lstGovn = []
    this.lstDocumentCategory = []
    this.lstContractors = []
    this.projectDescriptionList = []
    this.LstprojectDescription = []
    this.projectList = []
    this.lstConsultatnt = []
    this.selectedColumns = []
    this.lstAssignedProjectsForEmployee = []
    this.lstFrom1To100 = []
    this.consultantObj = {
      id: 0, contactName: '', consultantName: '', email: '', phone: '', relevantPhone: '', titleName: ''
    }
    this.AssignedProjectsDec = { id: 0, description: "", employeeName: "", assignedProjectDate: new Date, employeeId: 0, isAssigned: false, projectId: 0, projectUpdateId: 0 }

    this.ProjectDescriptionObj =
    {
      id: 0, projectName: '', description: '', userName: this.userName,
      descriptionDate: new Date, projectId: 0, projectUpdateId: 0, userId: this.userId
    }
    this.contractorObj = { id: 0, contactName: '', contractorName: '', email: '', phone: '', relevantPhone: '', titleName: '' }
    this.EndUsersObj = { id: 0, contactName: '', companyName: '', email: '', phone: '', relevantPhone: '', titleName: '' }
    this.ConsultantObj = { id: 0, contactName: '', consultantName: '', email: '', phone: '', relevantPhone: '', titleName: '' }

    this.projectObj = {
      acceptedDate: new Date,
      consultantId: 0, consultantName: '', contactName: '',
      lstprojectSystems: [], userId: this.userId, deadline: new Date,
      companyName: '', contractorName: '', contractorsId: 0, endUserContactName: '', endUsersId: 0,
      contractorContactName: '', projectComponentName: '', projectComponentsId: 0, projectCreationDate: new Date,
      governorateId: 0, projectName: '', projectStatusId: 1, rank: 0, governorateName: '', id: 0, projectStatusName: 'New'
    }
    this.ProjectDescriptionDeadline = {
      id: 0, projectName: '', description: '', userName: this.userName,
      descriptionDate: new Date, projectId: 0, projectUpdateId: 0, userId: this.userId
    }
    this.projectSystem = {
      projectId: 0, id: 0, lstprojectComponents: []
    }
    this.docproject = {
      projectUpdateId: 0, documentsCategoryId: 0, documentFile: '', id: 0, projectId: 0, documentsCategoryName: ''
    }
    this.project = {
      acceptedDate: new Date,
      consultantId: 0, consultantName: '', contactName: '',
      lstprojectSystems: [], userId: '', deadline: new Date,
      id: 0, projectStatusName: '', companyName: '', contractorName: '', contractorContactName: '', contractorsId: 0, endUserContactName: '', endUsersId: 0,
      projectComponentName: '', projectComponentsId: 0, projectCreationDate: new Date, projectName: '', projectStatusId: 0, rank: 0, governorateId: 0, governorateName: ''
    }
    if (this.role == 'PreSales' || this.role == 'PreSalesManager') {
      this.projectService.GetAllAcceptedProjects().subscribe(e => {
        this.projectList = e
        console.log("AcceptedProjects", this.projectList)

      })

    }
    if (this.role == 'Admin' || this.role == 'SalesManager') {
      this.projectService.GetAllProjects().subscribe(e => {
        this.projectList = e,
          console.log("projectList admin", this.projectList)

        this.projectList.forEach(customer => customer.projectCreationDate = new Date(customer.projectCreationDate));
      })
    }
    if (this.role == 'Sales') {
      this.projectService.GetAllProjectByUserId(this.userId).subscribe(e => {
        this.projectListForSales = e,
          console.log("projDesscSales", this.projectListForSales)
        this.projectListForSales.forEach(customer => customer.projectCreationDate = new Date(customer.projectCreationDate));
      })
    }
    for (let index = 0; index <= 100; index++) {
      this.lstFrom1To100.push(index);

    }

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
    this.ConsultantService.GetAllConsultants().subscribe(e => {
      this.lstConsultatnt = e
      console.log("consultatnt", e)
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
      data => {
        this.projectObj = data, console.log("projectObj", this.projectObj)
        if (this.projectObj.projectCreationDate == this.projectObj.acceptedDate) {
          this.projectObj.acceptedDate = null
        }
      },
      error => { console.log(error) }
    );
  }
  updateProjectRank($event, customer) {

    customer.rank = $event.target.value
    console.log("hamada", $event.target.value, customer)
    this.projectService.updateProject(customer.id, customer).subscribe(e => {
      console.log("success")
    })
  }
  goToProjCom() {
    this.route.navigate(['/projectComponent']);

  }
  AddNewProject() {
    this.route.navigate(['/addProject']);
  }
  search(term: string) {

  }
  reloadPage() {

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
    this.projectObj.consultantId = Number(this.projectObj.consultantId)
    console.log("Project before add", this.projectObj)

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
            this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select Correct Category and File' });
            reject(msg);
          }).then(
            res => { // For save projectComponent
              this.projectSystem.projectId = this.projectId
              this.projectSystem.lstprojectComponents = this.selectedColumns
              console.log("projSystem", this.projectSystem)
              console.log("selectedColumns", this.selectedColumns)
              this.ProjectSystemService.insertProjectSystems(this.projectSystem).toPromise()
              resolve('cons');
            },
            msg => { // Error
              this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select Correct Category and File' });
              reject(msg);
            }
          )
        .then(
          response => { // Success
            this.lstoddocproj.forEach(element => {
              element.projectId = this.projectId
            });
            this.projectdocumentService.insertdocument(this.lstoddocproj).toPromise()
            this.showTheFirstStepDialog = false
            this.projectService.GetAllProjects().subscribe(e => {
              this.projectList = e
              this.ngOnInit()
              this.activeIndex = 0

              resolve('cons');

            })
          },
          msg => { // Error
            this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select Correct Category and File' });

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
    if (this.projectObj.contractorsId == 0) {
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select Contractor' });
    }
    if (this.projectObj.endUsersId == 0) {
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select End User' });
    }
    if (this.projectObj.governorateId == 0) {
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select Governorate' });
    }
    if (this.selectedColumns.length == 0) {
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select Project Components' });
    }
    if (this.projectObj.consultantId == 0) {
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select consultant' });
    }
    if (this.projectObj.contractorsId != 0 && this.projectObj.governorateId != 0 && this.projectObj.endUsersId != 0
      && this.selectedColumns.length != 0 && this.projectObj.consultantId != 0) {
      this.activeIndex = this.activeIndex + 1
    }
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
  tech($event) {
    console.log("filter", $event.value);
  }

  customFilterCallback(filter: (a) => void, value: any): void {
    // this.stopListening = true;

    console.log("value", value);
    filter(value);
    //  this.stopListening = false;
  }
  showNotification(from, align) {
    const color = Math.floor(Math.random() * 5 + 1);

    switch (color) {
      case 1:
        this.toastr.info(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Successfully Sent to  <b>Mohamed Labib</b> - He will review the project and will be tell you about the new updates Thank you for your interst .</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 2:
        this.toastr.success(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Successfully Sent to  <b>Mohamed Labib</b> - He will review the project and will be tell you about the new updates Thank you for your interst .</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 3:
        this.toastr.warning(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Successfully Sent to  <b>Mohamed Labib</b> - He will review the project and will be tell you about the new updates Thank you for your interst .</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 4:
        this.toastr.error(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Successfully Sent to  <b>Mohamed Labib</b> - He will review the project and will be tell you about the new updates Thank you for your interst .</span>',
          "",
          {
            timeOut: 4000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 5:
        this.toastr.show(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Successfully Sent to  <b>Mohamed Labib</b> - He will review the project and will be tell you about the new updates Thank you for your interst .</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      default:
        break;
    }
  }

  OpenDeailogAcceptProject(projId) {
    console.log("projId", projId)
    this.acceptProjectId = projId
    this.acceptdescription = true
  }
  AcceptProject() {
    this.projectObj.acceptedDate = new Date

    if (this.ProjectDescriptionObj.description != '') {
      let promise = new Promise((resolve, reject) => {
        this.projectService.AcceptProject(this.acceptProjectId).toPromise()
          .then(
            res => {
              this.ProjectDescriptionObj.projectId = this.acceptProjectId
              console.log("this.ProjectDescriptionObj.projectId", this.ProjectDescriptionObj.projectId)
              this.projectDescriptionService.insertProjectDescription(this.ProjectDescriptionObj).toPromise()
              resolve('cons');
              this.acceptdescription = false
              if (this.role == 'Admin' || this.role == 'SalesManager') {
                this.projectService.GetAllProjects().subscribe(e => {
                  this.projectList = e,
                    console.log("projectList admin", this.projectList)

                  this.projectList.forEach(customer => customer.projectCreationDate = new Date(customer.projectCreationDate));
                })
              }
              if (this.role == 'Sales') {
                this.projectService.GetAllProjectByUserId(this.userId).subscribe(e => {
                  this.projectListForSales = e,
                    console.log("projDesscSales", this.projectListForSales)
                  this.projectListForSales.forEach(customer => customer.projectCreationDate = new Date(customer.projectCreationDate));
                })
              }

            },
            msg => { // Error
              this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Enter Description' });
              reject(msg);
            })
      });
      return promise;
    } else {
      this.messageService.add({ severity: 'error', key: "tm", summary: 'Error', detail: 'Please Enter Description' });
      console.log("bom")
    }



    // this.projectDescriptionService.insertProjectDescription(this.ProjectDescriptionObj).subscribe(res => {
    //   this.ProjectDescriptionObj = res
    // }

    // )
    // this.projectService.AcceptProject(projId).subscribe(e => {
    //   this.ngOnInit()
    //   this.showNotification('top', 'left')
    //   this.AcceptedProject = true
    // })
  }

  showContractor(id) {
    console.log("cont Id", id)
    this.displayContractor = true;
    this.ContractorsService.GetContractorById(id).subscribe(
      data => {
        this.contractorObj = data,
          console.log("contractorObj", this.contractorObj)
      },
      error => { console.log(error) }
    );
  }
  showEndUser(id) {
    this.displayEndUsers = true;
    this.EndUsersService.GetEndUserById(id).subscribe(
      data => {
        this.EndUsersObj = data,
          console.log("EndUsersObj", this.EndUsersObj)
      },
      error => { console.log(error) }
    );
  }
  showConsultant(id) {
    this.displayConsultant = true;
    this.ConsultantService.GetConsultantById(id).subscribe(
      data => {
        this.ConsultantObj = data,
          console.log("ConsultantObj", this.ConsultantObj)
      },
      error => { console.log(error) }
    );
  }

  pickUpConsultantId() {
    console.log("consu", this.consultantObj);
    this.projectObj.consultantId = Number(this.projectObj.consultantId)
    this.projectObj.consultantId = this.consultantObj.id

  }
  pickUpContractorId() {
    console.log("contractorObj", this.contractorObj);

    this.projectObj.contractorsId = Number(this.projectObj.contractorsId) //NAN
    this.projectObj.contractorsId = this.contractorObj.id
  }
  ViewDescriptionByProjectId(projectId) {
    console.log("idddd", projectId)
    this.projectDescritionFlag = true;
    this.projectDescriptionService.GetDescriptionsByProjectId(projectId).subscribe(
      res => { this.LstprojectDescription = res }
    )
  }


  closeViewAllOfferedOffers() {
    this.ViewAssignedProjectFlag = false
  }
  ViewAllOfferedOffers(projectId) {
    this.ViewAssignedProjectFlag = true
      this.assignProjectService.GetAllAssignedProjectsByProjectId(projectId).subscribe(
        res => {
          this.lstAssignedProjectsForEmployee = res,
            console.log("lstAssignedProjectsForEmployee", this.lstAssignedProjectsForEmployee)
        }
      )
  }
  updateInDeadline() {
    console.log("updateInDeadline", this.projectObj)

    // this.showCalender = false
    this.showCalenderDialog = true
    this.ProjectDescriptionDeadline.projectId = this.projectObj.id
    console.log("obj", this.projectObj)

    let promise = new Promise((resolve, reject) => {
      this.projectDescriptionService.insertProjectDescription(this.ProjectDescriptionDeadline).toPromise()
        .then(
          res => {
            this.projectService.updateProject(this.projectObj.id, this.projectObj).toPromise()
            this.hideDialogs()
            resolve('cons');

          },
          msg => { // Error
            this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please fill fields' });
            reject(msg);
          })
      // .then(
      //   res => { // For save projectComponent
      //     this.projectSystem.projectId = this.projectId
      //     this.projectSystem.lstprojectComponents = this.selectedColumns
      //     console.log("projSystem", this.projectSystem)
      //     console.log("selectedColumns", this.selectedColumns)
      //     this.ProjectSystemService.insertProjectSystems(this.projectSystem).toPromise()
      //     resolve('cons');
      //   },
      //   msg => { // Error
      //     this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select Correct Category and File' });
      //     reject(msg);
      //   }
      // )

    });
    return promise;
    this.projectService.updateProject(this.projectObj.id, this.projectObj).subscribe(e => {
      console.log("success")

    })
  }
  hideDialogs() {
    this.showCalenderDialog = false
    this.showCalender = false
  }
  closeViewAllAssignedProject() {
    this.ViewAssignedProjectFlag2 = false
    this.ViewAssignedProjectForUserFlag=false
  }
  ViewAllAssignedProject() {
    this.ViewAssignedProjectFlag2 = true
    if (this.role == 'PreSalesManager' || this.role == 'PreSales'|| this.role == 'Admin'|| this.role == 'CEO') {
      this.assignProjectService.GetAllAssignProjects().subscribe(
        res => {
          this.lstAssignedProjectsForEmployee = res,
            console.log("lstAssignedProjectsForEmployee", this.lstAssignedProjectsForEmployee)
        }
      )
    }
  }

  ViewAssignedProjectForUser()
  {
    this.ViewAssignedProjectForUserFlag=true

    this.assignProjectService.GetAllAssignedProjectsByEmployeeId(this.EmpId).subscribe(
      res => {
        this.lstAssignedProjectsForEmployee = res,
          console.log("lstAssignedProjectsForEmployee", this.lstAssignedProjectsForEmployee)
      }
    )
  }
  viewAssignProjectDesc(assignedProjectsById) {
    this.ViewAssignedDescFlag = true
    this.assignProjectService.GetAssignProject(assignedProjectsById).subscribe(
      res => {
        this.AssignedProjectsDec = res,
          console.log("assign project", this.AssignedProjectsDec)
      }
    )
  }
}




import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssigneProject } from 'app/shared/Models/AssignedProject';
import { Datasheet } from 'app/shared/Models/Datasheet';
import { Employee } from 'app/Shared/Models/Employee';
import { Offer } from 'app/shared/Models/Offer';
import { OfferDescription } from 'app/shared/Models/OfferDescriptions';
import { OfferDocuments } from 'app/shared/Models/OfferDocuments';
import { OfferStatus } from 'app/shared/Models/OfferStatus';
import { Profession } from 'app/shared/Models/Profession';
import { ProjectCost } from 'app/shared/Models/ProjectCost';
import { ProjectStatus } from 'app/Shared/Models/ProjectStatus';
import { AssignProjectService } from 'app/shared/Services/AssignProject/assign-project.service';
import { CostService } from 'app/shared/Services/Cost/cost.service';
import { DatasheetService } from 'app/shared/Services/Datasheet/datasheet.service';
import { EmployeeService } from 'app/Shared/Services/Employees/employee.service';
import { OfferService } from 'app/shared/Services/Offer/offer.service';
import { OfferDescriptionService } from 'app/shared/Services/OfferDescription/offer-description.service';
import { OfferDocumentsService } from 'app/shared/Services/OfferDocuments/offer-documents.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DocumentCategory } from '../../../../../src/app/Shared/Models/DocumentCategory';
import { Project } from '../../../../../src/app/Shared/Models/Project';
import { ProjectDescription } from '../../../../../src/app/Shared/Models/ProjectDescripton';
import { ProjectDocuments } from '../../../../../src/app/Shared/Models/ProjectDocuments';
import { ProjectUpdate, ProjectUpdateExtraData } from '../../../../../src/app/Shared/Models/ProjectUpdate';
import { DocumentCategoryService } from '../../../../../src/app/Shared/Services/DocumentCategory/document-category.service';
import { OfferStatusNameService } from '../../../../../src/app/Shared/Services/OfferStatus/offer-status-name.service';
import { ProjectService } from '../../../../../src/app/Shared/Services/Project/project.service';
import { ProjectDescriptionService } from '../../../../../src/app/Shared/Services/ProjectDescription/project-description.service';
import { ProjectDocumentService } from '../../../../../src/app/Shared/Services/ProjectDocument/project-document.service';
import { ProjectUpdateService } from '../../../../../src/app/Shared/Services/ProjectUpdate/project-update.service';
import { environment } from '../../../../../src/environments/environment';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {


  project: Project
  activeIndex: number = 0;
  items: MenuItem[];
  lstAssignedProjectsForEmployee: AssigneProject[]
  ProjectUpdateDescription: ProjectDescription
  LstProjectUpdateDescription: ProjectDescription[]
  LstProjectUpdateDescriptionByUpdateId: ProjectDescription[]
  projectUpdateIdForAssign: number
  projectUpdate: ProjectUpdate
  NewLeaveDialogbool: boolean
  docproject: ProjectDocuments
  lstoddocproj: ProjectDocuments[]
  docOffer: OfferDocuments
  lstdocOffer: OfferDocuments[]
  lstoddocprojOff: ProjectDocuments[]
  lstOfferDataSheet: Datasheet[]
  LstpProjectUpdates: ProjectUpdate[]
  lstDocumentCategory: DocumentCategory[]
  lstProfessions: Profession[]
  dataSheetObj: Datasheet
  TempOfferId: number
  userId: string = localStorage.getItem('userId')
  EmpId: string = localStorage.getItem('empId')
  projectUpdateId: number
  projectUpdateIdForOffer: number
  result: ProjectUpdateExtraData[]
  projectId: number
  selectedCountry: string
  lstOfCurrency: string[]
  documentObj: ProjectDocuments
  ViewDocsFlag: boolean = false
  AssignProject: AssigneProject
  ViewLatestDocsFlag: boolean = false
  ViewDocsUpadteFlag: boolean = false
  AssignOffersFlag: boolean = false
  ViewOffersDocumentFlag: boolean = false
  MakeOfferFlag: boolean = false
  ViewOffersFlag: boolean = false
  lstProjDocuments: ProjectDocuments[]
  lstOfLatestProjDocuments: ProjectDocuments[]
  lstEmployees: Employee[]
  offer: Offer
  lstOffer: Offer[]
  selecteProfessiondVal: number
  lstOfferDocuments: OfferDocuments[]
  lstOfferDescription: OfferDescription[]
  costObj: ProjectCost
  stateOptions: any[];
  LstOfferStatus: OfferStatus[]
  justifyOptions: any[];
  projectStatus: ProjectStatus
  fileToUpload: File = null;
  value1: string = "EGP";
  SelectionFileName: string = 'Choose File '
  value2: number;
  path: string
  FullPath: string
  value3: any;
  testPath: string
  offerStatusId: number
  ProjectCostId: number
  CurrencyValue: string
  offerId: number
  indexDesc: ProjectUpdate
  offerDescription: OfferDescription
  role: string;
  ViewOfferDescFlag: boolean;
  constructor(private activeRoute: ActivatedRoute,
    private projectService: ProjectService,
    private ProjectUpdateService: ProjectUpdateService,
    private projectdocumentService: ProjectDocumentService,
    private DocumentCategoryService: DocumentCategoryService,
    private httpClient: HttpClient,
    private projectDescriptionService: ProjectDescriptionService,
    private confirmationService: ConfirmationService, private messageService: MessageService,
    private OfferStatusService: OfferStatusNameService,
    private datasheetService: DatasheetService,
    private statusService: OfferStatusNameService,
    private costService: CostService,
    private offerService: OfferService,
    private offerdescriptionService: OfferDescriptionService,
    private offerDocumentsService: OfferDocumentsService,
    private employeeService: EmployeeService,
    private assignProjectService: AssignProjectService

  ) { }

  ngOnInit(): void {
    this.lstOffer = []
    this.lstOfferDescription = []
    this.lstProfessions = []
    this.lstdocOffer = []
    this.lstoddocproj = []
    this.lstDocumentCategory = []
    this.lstoddocprojOff = []
    this.lstProjDocuments = []
    this.lstOfferDocuments = []
    this.lstEmployees = []
    this.lstOfLatestProjDocuments = []
    this.LstProjectUpdateDescription = []
    this.LstProjectUpdateDescriptionByUpdateId = []
    this.result = []
    this.lstOfferDataSheet = []
    this.LstOfferStatus = []
    console.log("ds", this.value1)
    this.role = localStorage.getItem('roles');
    this.lstOfCurrency = ['$', 'U', 'EGP']
    this.stateOptions = [{ label: 'EGP', value: 'EGP' }, { label: 'USD', value: 'USD' }, { label: 'EUR', value: 'EUR' }];
    this.projectId = this.activeRoute.snapshot.params['projectId'];
    console.log("projectId", this.projectId)
    this.AssignProject = {
      projectId: this.projectId,
      employeeId: 0, id: 0, isAssigned: false, projectUpdateId: 0, description: '', AssignedProjectDate: new Date
    }
    this.docOffer = { id: 0, offerId: 0, documentFile: '' }
    this.project = {
      userId: this.userId, deadline: new Date, acceptedDate: new Date,
      lstprojectSystems: [], consultantId: 0, consultantName: '', contactName: '',
      companyName: '', contractorContactName: '', contractorName: '', endUserContactName: '', endUsersId: 0,
      contractorsId: 0, governorateName: '', projectComponentName: '', projectCreationDate: new Date, projectName: '',
      projectStatusName: '', rank: 0, governorateId: 0, id: 0, projectComponentsId: 0, projectStatusId: 0
    }
    this.ProjectUpdateDescription = {
      description: '', projectUpdateId: 0, id: 0, descriptionDate: new Date, projectId: this.projectId, projectName: '', userId: this.userId,
      userName: ''
    }
    this.offerDescription = {
      offersId: 0, id: 0, description: '', projectUpdateId: 0,
      descriptionDate: new Date, projectId: this.projectId, projectName: '', userId: this.userId, userName: ''
    }
    this.documentObj = {
      documentsCategoryName: '', id: 0, projectId: 0, documentFile: '', documentsCategoryId: 0, projectUpdateId: 0
    }
    this.projectStatus = {
      id: 0, projectStatusName: ''
    }
    this.docproject = {
      projectUpdateId: 0, documentsCategoryId: 0, documentFile: '', id: 0, projectId: Number(this.projectId), documentsCategoryName: ''
    }
    this.projectService.GetProjectById(this.projectId).subscribe(e => {
      this.project = e
    })

    this.projectUpdate = {
      DueDate: new Date, id: 0, ProjectId: this.projectId, ProjectName: this.project.projectName, deadline: new Date()
    }
    this.DocumentCategoryService.GetAllDocumentCategories().subscribe(e => {
      this.lstDocumentCategory = e
    })
    this.dataSheetObj = {
      documentLink: '', id: 0, offerId: 5
    }
    this.offer = {
      projectUpdateId: 0,
      dataSheet: '', id: 0, offerCreationDate: new Date(), offerStatusId: 0, projectCostsId: 0, projectsId: this.projectId
    }
    console.log("offerCreationDate", this.offer.offerCreationDate)

    this.costObj = {
      id: 0, cost: 0, currency: ''
    }

    this.OfferStatusService.GetAllOfferStatuses().subscribe(e => {
      this.LstOfferStatus = e
      console.log("offerStatus", this.LstOfferStatus)
    })
    this.employeeService.GetAllProfessions().subscribe(e => {
      this.lstProfessions = e
      console.log("prof", this.lstProfessions)
    })
    // this.employeeService.GetAllEmployeesByProfessionId().subscribe(e=>{
    //   this.lstEmployees = e
    // })


    this.RloadPage()
  }
  viewSingleDoc(fileObj) {
    console.log(fileObj)
    var filePath = `${environment.Domain}wwwroot/documentFiles/${fileObj.documentFile}`;
    window.open(filePath);
  }
  deleteDocDB(i) {
    this.projectdocumentService.deletedocument(i.id).subscribe(e => {
      this.lstProjDocuments.forEach((element, index) => {
        if (element.id == i.id)
          this.lstProjDocuments.splice(index, 1);
      });
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Deleted Successfully' });
    })
  }
  catchCurrency(event) {
    console.log("event", event.value)
    console.log("value2", this.value2)
  }
  addNewUpdate() {
    this.NewLeaveDialogbool = true
  }
  RloadPage() {
    this.ProjectUpdateService.GetAllUpdatesByProjectId(this.projectId).subscribe(e => {
      this.LstpProjectUpdates = e
      this.indexDesc = this.LstpProjectUpdates[0]
      console.log("LstpProjectUpdatesAgain", e)

      this.projectDescriptionService.GetDescriptionsByProjectId(this.projectId).subscribe(e => {
        this.LstProjectUpdateDescription = e
        console.log("hh")
        this.LstProjectUpdateDescription.forEach(customer => customer.descriptionDate = new Date(customer.descriptionDate));

        console.log("LstProjectUpdateDescription", e)
      })

      this.docproject = {
        documentsCategoryId: 0, projectUpdateId: 0, id: 0, documentFile: '', projectId: this.projectId, documentsCategoryName: ''
      };

    })
    this.ProjectUpdateDescription = {
      description: '', projectUpdateId: 0, id: 0, descriptionDate: new Date, projectId: this.projectId, projectName: '', userId: this.userId,
      userName: ''
    }
    this.docproject = {
      projectUpdateId: 0, documentsCategoryId: 0, documentFile: '', id: 0, projectId: Number(this.projectId), documentsCategoryName: ''
    }
    this.lstoddocproj = []
    this.lstdocOffer = []
    this.offerDescription = {
      offersId: 0, id: 0, description: '', projectUpdateId: 0, descriptionDate: new Date, projectId: this.projectId, projectName: '', userId: this.userId, userName: ''
    }
    this.offer = {
      projectUpdateId: 0,
      dataSheet: '', id: 0, offerCreationDate: new Date(), offerStatusId: 0, projectCostsId: 0, projectsId: this.projectId
    }
    this.docOffer = { id: 0, offerId: 0, documentFile: '' }
    this.costObj = {
      id: 0, cost: 0, currency: ''
    }
    this.costObj = {
      cost: 0, id: 0, currency: ''
    }
  }
  confirm(offerDesc) {

    console.log("offerDesc", offerDesc)
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.offerService.deleteOffer(offerDesc.offersId).subscribe(
          data => {
            // this.projectDescriptionService.GetDescriptionsByProjectUpdateId(offerDesc.projectUpdateId).subscribe(e => {
            //   this.LstProjectUpdateDescriptionByUpdateId = e
            //   this.LstProjectUpdateDescription.forEach(customer => customer.descriptionDate = new Date(customer.descriptionDate));
            //   console.log("LstProjectUpdateDescriptionByUpdateId", e)
            // })
            this.messageService.add({ severity: 'info', summary: 'Record Deleted!', detail: 'Record Deleted!' });

            this.lstOfferDescription = []
            console.log("offerProjectUpdateId", offerDesc.projectUpdateId)
            this.offerdescriptionService.GetAllOfferByProjectUpdateId(offerDesc.projectsId, offerDesc.projectUpdateId).subscribe(
              res => {
                console.log("lstOfferDescriptionversion2", this.lstOfferDescription)
                this.lstOfferDescription = res
              }
            ),
              err => console.log(err)
          }
        )
      }
    });
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }
  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }
  SaveProjectUpdate() {
    let promise = new Promise((resolve, reject) => {
      this.ProjectUpdateService.insertProjectUpdate(this.projectUpdate).toPromise()
        .then(
          response => { // Success
            this.projectUpdateId = Number(response)
            console.log("res", response)
            this.lstoddocproj.forEach(element => {
              element.projectUpdateId = this.projectUpdateId
            });
            this.projectUpdate = { DueDate: new Date, ProjectId: this.projectId, ProjectName: '', id: 0, deadline: new Date }
            this.projectdocumentService.insertdocument(this.lstoddocproj).toPromise()
            this.NewLeaveDialogbool = false
            resolve('cons');
          },
          msg => { // Error
            reject(msg);
          }
        ).then(
          response => { // Success
            this.ProjectUpdateDescription.projectUpdateId = this.projectUpdateId
            console.log("ProjectUpdateDescription", this.ProjectUpdateDescription)
            this.projectDescriptionService.insertProjectDescription(this.ProjectUpdateDescription).toPromise()
            resolve('ProjectUpdateDescription');

          },
          msg => { // Error
            reject(msg);
          }
        )
        .then(
          response => { // Success
            this.ProjectUpdateDescription.projectUpdateId = this.projectUpdateId
            this.RloadPage()
            resolve('cons');
            this.RloadPage()
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    this.projectDescriptionService.GetDescriptionsByProjectId(this.projectId).subscribe(e => {
      this.LstProjectUpdateDescription = e
      // this.indexDesc = this.LstProjectUpdateDescription[0]
      console.log("hhhhhhhhhhhhh")
      this.LstProjectUpdateDescription.forEach(customer => customer.descriptionDate = new Date(customer.descriptionDate));

      console.log("LstProjectUpdateDescription", e)
    })
    return promise;
    // this.ProjectUpdateService.insertProjectUpdate(this.projectUpdate).subscribe(e => {
    //   console.log("projectUpdate inserted Successfully")
    // })

  }
  fullPath() {
    this.FullPath = this.path + '\\' + this.SelectionFileName
    console.log("fullPath", this.FullPath)
  }
  Savedoctolist() {
    if (this.docproject.documentsCategoryId != 0 && this.docproject.documentFile != '') {
      this.docproject.documentsCategoryId = Number(this.docproject.documentsCategoryId)
      this.lstDocumentCategory.forEach(element => {
        if (element.id == this.docproject.documentsCategoryId) {
          this.docproject.documentsCategoryName = element.categoryName
        }
      });
      this.lstoddocproj.push(this.docproject);
      this.docproject = {
        documentsCategoryId: 0, projectUpdateId: 0, id: 0, documentFile: '', projectId: this.projectId, documentsCategoryName: ''
      };
    }
    else {

      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please Select Correct Category and File' });

    }
  }
  SavedocOffertolist() {
    this.lstdocOffer.push(this.docOffer);
    console.log("lstdocOffer", this.lstdocOffer)
    this.docOffer = { id: 0, offerId: 0, documentFile: '' };
  }
  SaveDatasheetToList() {
    this.lstOfferDataSheet.push(this.dataSheetObj)
  }
  uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.docproject.documentFile = fileToUpload.name;
    // this.docOffer.documentFile = fileToUpload.name;

    this.SelectionFileName = fileToUpload.name
    console.log(fileToUpload.name)

    this.httpClient.post(environment.uploadFile, formData)
      .subscribe(res => {
        console.log(res)
        // alert('Uploaded Successfully.');
        this.messageService.add({ severity: 'success', key: "tc", summary: 'Uploaded', detail: 'Uploaded Successfully' });

      });
  }
  uploadFileInDataSheet = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    console.log("fileToUpload.name", fileToUpload.name)
    this.docOffer.documentFile = fileToUpload.name;
    this.SelectionFileName = fileToUpload.name
    console.log(fileToUpload.name)

    this.httpClient.post(environment.uploadFileDataSheets, formData)
      .subscribe(res => {
        console.log(res)
        // alert('Uploaded Successfully.');
        this.messageService.add({ severity: 'success', key: "tc", summary: 'Uploaded', detail: 'Uploaded Offer Successfully' });

      });
  }
  deleteDocFromList(doc) {
    console.log("doc", doc)
    console.log("lstDoc", this.lstoddocproj)
    this.lstoddocproj = this.lstoddocproj.filter(v => v != doc);
    console.log("doc2", doc)
    console.log("lstDoc2", this.lstoddocproj)
    this.messageService.add({ severity: 'warn', key: "tc", summary: 'Removed', detail: 'Removed Successfully' });

  }
  deleteDocOfferFromList(doc) {
    this.lstdocOffer = this.lstdocOffer.filter(v => v != doc);
    this.messageService.add({ severity: 'warn', key: "tc", summary: 'Removed', detail: 'Removed Successfully' });
  }
  ViewDescrption(projectUpdateId) {
    this.ViewDocsUpadteFlag = true;
    this.projectDescriptionService.GetDescriptionsByProjectUpdateId(projectUpdateId).subscribe(e => {
      this.LstProjectUpdateDescriptionByUpdateId = e
      this.LstProjectUpdateDescriptionByUpdateId.forEach(customer => customer.descriptionDate = new Date(customer.descriptionDate));
      console.log("LstProjectUpdateDescriptionByUpdateId", e)
    })
  }
  ViewOfferDescrption(offerDescId) {
    console.log("Offer obj", offerDescId)
    this.ViewOfferDescFlag = true;
    this.offerdescriptionService.GetAllOfferDescriptionByOfferId(offerDescId).subscribe(
      res => {
        console.log("lstOfferDescription", this.offerDescription)
        this.offerDescription = res
      }
    ),
      err => console.log(err)
  }

  ViewDocs(docObj) {
    this.ViewDocsFlag = true
    this.documentObj = docObj
    console.log("documentObj", this.documentObj)
    console.log("projectId", this.projectId)
    if (this.documentObj.id == null) {
      this.documentObj.id = 0;
    }
    //view all docs by updateProject
    this.projectdocumentService.GetAllDocumentsByProjectUpdateID(this.projectId, this.documentObj.id).subscribe(e => {
      this.lstProjDocuments = e
      console.log("lstProjDocuments", this.lstProjDocuments)
    })
  }
  ViewLatestDocs(projectId) {
    this.ViewLatestDocsFlag = true
    //this.documentObj = docObj
    this.projectdocumentService.GetLatestDocuments(this.projectId).subscribe(e => {
      this.lstOfLatestProjDocuments = e
      console.log("lstOfLatestProjDocuments", this.lstOfLatestProjDocuments)
    })
  }
  handleFileInput(files: FileList) {
    var fil = document.getElementById("myFile");
  }
  ShowOfferDialog(projectUpdateId) {
    console.log("updateId", projectUpdateId)
    this.projectUpdateIdForOffer = projectUpdateId
    this.MakeOfferFlag = true
  }
  SaveOffer() {
    let promise = new Promise((resolve, reject) => {
      this.costService.insertProjectCost(this.costObj).toPromise()
        .then(
          response => { // Success
            this.costObj.currency = this.value1
            this.offer.projectCostsId = response
            this.offer.offerStatusId = Number(this.offer.offerStatusId)
            this.offer.projectUpdateId = Number(this.projectUpdateIdForOffer)
            this.offer.offerStatusId = 1
            this.offerService.insertOffer(this.offer).subscribe(e => {
              this.offerId = e
              this.lstdocOffer.forEach(element => {
                element.offerId = this.offerId
              });
              this.datasheetService.insertOfferDocuments(this.lstdocOffer).toPromise()
              this.offerDescription.offersId = this.offerId
              this.offerDescription.projectUpdateId = Number(this.projectUpdateIdForOffer)
              this.offerdescriptionService.insertOfferDescription(this.offerDescription).toPromise()
              this.MakeOfferFlag = false
              this.RloadPage()
            })
          },
          msg => { // Error
            reject(msg);
          }
        )
    }
    );

    return promise;
  }
  showLatestDoc() {
    this.testPath = 'PharmacyDictionary.docx'
    this.datasheetService.GetDocumentByName(this.testPath).subscribe(e => {
      console.log("gaboo el7")
      console.log("elpath", e)
      // window.open(e);
    })
  }
  showOffers(projectUpdate) {
    console.log("projUpdateId", projectUpdate)
    this.ViewOffersFlag = true
    // this.offerService.GetAllOffers().subscribe(
    //   res => {
    //     this.lstOffer = res,
    //       this.lstOffer.forEach(customer => customer.offerCreationDate = new Date(customer.offerCreationDate));
    //   }
    // ),
    //   err => console.log(err)
    if (projectUpdate.id == null) {
      projectUpdate.id = 0
    }
    if (this.role == 'PreSales' || this.role == 'PreSalesManager') {
      this.offerdescriptionService.GetAllOfferByProjectUpdateId(projectUpdate.projectId, projectUpdate.id).subscribe(
        res => {
          console.log("lstOfferDescription", this.lstOfferDescription)
          this.lstOfferDescription = res
        }
      ),
        err => console.log(err)
    }
    if (this.role == 'Sales' || this.role == 'SalesManager') {
      this.offerdescriptionService.GetAllOfferByProjectUpdateIdAndUserId(projectUpdate.projectId, projectUpdate.id).subscribe(res => 
        { this.lstOfferDescription = res,
        console.log("LstProjectUpdateDescription user",this.lstOfferDescription) })
    }

  }
  changeStatus(offerDescription) {
    console.log("teeeeeeeeeeeeeeeeet", offerDescription)
    console.log("obj before", offerDescription)
    this.offerService.GetOfferById(offerDescription.offersId).subscribe(
      res1 => {
        this.offer = res1,
          this.offer.offerStatusId = offerDescription.offerStatusId
        this.offerService.updateOffer(offerDescription.offersId, this.offer).subscribe(
          res => {
            this.offer = res,
              console.log("obj after", this.offer),
              this.ViewOffersFlag = false
            this.messageService.add({ severity: 'warn', key: "tc", summary: 'Updated', detail: 'Status Updated Successfully' });

          }
        ),
          err => console.log(err)
      }
    )
  }
  viewOfferDocuments(offerDoc) {
    console.log("offDoc", offerDoc)
    this.TempOfferId = offerDoc.offersId
    this.offerDocumentsService.GetAllOfferDocumentsByOfferId(offerDoc.offersId).subscribe(e => {
      this.lstOfferDocuments = e

    })
    this.ViewOffersDocumentFlag = true
  }
  viewSingleOfferDoc(doc) {
    console.log(doc)
    var filePath = `${environment.Domain}wwwroot/DataSheets/${doc.documentFile}`;
    window.open(filePath);
  }
  deleteOfferDoc(doc) {
    this.offerDocumentsService.deleteOfferDocument(doc.id).subscribe(e => {
      this.lstOfferDocuments = []
      this.offerDocumentsService.GetAllOfferDocumentsByOfferId(this.TempOfferId).subscribe(e => {
        this.lstOfferDocuments = e

      })
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Deleted Successfully' });
    })
  }
  AssignProjectUpdateFlag(projectUpdateDesc) {
    // this.projectUpdateId = 
    this.projectUpdateIdForAssign = projectUpdateDesc.id
    console.log("projectUpdateDesc", projectUpdateDesc)
    this.AssignOffersFlag = true
  }
  PickProfessionId() {
    console.log("selecteProfessiondVal", this.selecteProfessiondVal)

    this.employeeService.GetAllEmployeesByProfessionId(this.selecteProfessiondVal).subscribe(e => {
      this.lstEmployees = e
      console.log("emps", this.lstEmployees)
    })
  }
  AssignProjectUpdate() {
    this.AssignProject.projectUpdateId = this.projectUpdateIdForAssign
    console.log("AssignProject", this.AssignProject)
    this.assignProjectService.insertAssignProject(this.AssignProject).subscribe(e => {
      console.log("assigned",)
      this.AssignOffersFlag = false
    })
  }
  ViewAllAsignedProjects() {
    this.assignProjectService.GetAllAssignedProjectsByEmployeeId(Number(this.EmpId)).subscribe(e => {

    })
  }
  ViewAllOfferedOffers() {
    this.offerdescriptionService.GetAllOfferOfferedByUserId(this.userId).subscribe(res => { this.LstProjectUpdateDescription = res })
  }
}

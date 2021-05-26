// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  Domain:'http://localhost:57910/',
  urlAddress:'http://localhost:57910',
  urlAddress4200:'http://localhost:4200/#/',
  Project:'http://localhost:57910/api/Projects',
  ProjectComponent:'http://localhost:57910/api/ProjectComponents',
  Contractors:'http://localhost:57910/api/Contractors',
  EndUsers:'http://localhost:57910/api/EndUsers',
  Governorates:'http://localhost:57910/api/Governorates',
  ProjectStatus:'http://localhost:57910/api/ProjectStatus',
  ProjectDescription:'http://localhost:57910/api/ProjectDescriptions',
  uploadFile:'http://localhost:57910/api/ProjectDocuments/Uploadfile',
  uploadFileDataSheets:'http://localhost:57910/api/DataSheets/Uploadfile',
  deletedocument:'http://localhost:57910/api/ProjectDocuments/',
  DocumentCategory:'http://localhost:57910/api/DocumentsCategories',
  ProjectDocument:'http://localhost:57910/api/ProjectDocuments',
  ProjectUpdate:'http://localhost:57910/api/ProjectUpdates',
  GetAllUpdatesByProjectId:'http://localhost:57910/api/ProjectUpdates/GetAllUpdatesByProjectId',
  GetAllUpdatesByProjectUpdateId:'http://localhost:57910/api/ProjectDocuments/GetProjectDocumentByProjectUpdateId/',
  GetLatestDocuments:'http://localhost:57910/api/ProjectDocuments/GetLatestDocuments/',
  GetDescriptionsByProjectId:'http://localhost:57910/api/ProjectDescriptions/GetDescriptionsByProjectId/',
  GetDescriptionsByProjectUpdateId:'http://localhost:57910/api/ProjectDescriptions/GetDescriptionsByProjectUpdateId/',
  ProjectDocumentByProjectID:'http://localhost:57910/api/ProjectDocuments/GetProjectDocumentByProjectId/',
  ProjectSystem:'http://localhost:57910/api/ProjectSystems/',
  OfferStatus:'http://localhost:57910/api/OfferStatus/',
  OfferDocuments:'http://localhost:57910/api/OfferDocuments/',
  GetDocument:'http://localhost:57910/api/DataSheets/GetDocument/',
  projectCost:'http://localhost:57910/api/ProjectCosts/',
  Offer:'http://localhost:57910/api/Offers/',
  Employees:'http://localhost:57910/api/Employees/',
  AcceptProject:'http://localhost:57910/api/Projects/AcceptProject/',
  GetAllAcceptedProjects:'http://localhost:57910/api/Projects/GetAllAcceptedProjects',
  OfferDescription:'http://localhost:57910/api/OfferDescriptions',
  GetAllOfferByProjectUpdateId:'http://localhost:57910/api/OfferDescriptions/GetAllOfferByProjectUpdateId/',
  GetAllOfferDocumentsByOfferId:'http://localhost:57910/api/OfferDocuments/GetAllOfferDocumentsByOfferId/',
  GetAllEmployeesByProfessionId:'http://localhost:57910/api/Employees/GetAllEmployeesByProfessionId/',
  GetAllProfessions:'http://localhost:57910/api/Employees/GetAllProfessions',
  AssigneProject:'http://localhost:57910/api/AssignedProjects/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

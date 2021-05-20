import { NgModule } from '@angular/core';
import { ProjectRouting } from './project-routing';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
// import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DragDropModule } from 'primeng/dragdrop';
import { PickListModule } from 'primeng/picklist';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatIconModule } from '@angular/material/icon';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ProjectStatusComponent } from './project-status/project-status.component';
import { GovernoratesComponent } from './governorates/governorates.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { EndUsersComponent } from './end-users/end-users.component';
// import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import {StepsModule} from 'primeng/steps';
// import { BrowserModule } from '@angular/platform-browser'
 


@NgModule({
  imports: [
    CommonModule,
    ProjectRouting,
    FormsModule,
    // BrowserModule,
    // NgWizardModule.forRoot(ngWizardConfig),
    AccordionModule,
    // MatDialogModule,
    StepsModule,
    ButtonModule,
    // NgWizardModule,
    HttpClientModule,
    // MatFormFieldModule,
    // FontAwesomeModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    TableModule,
    ToastModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    ToastModule,
    // MatSliderModule,
    // MatIconModule,
    ConfirmDialogModule,
    DragDropModule,
    PickListModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    ProjectComponent,
    AddProjectComponent,
    ProjectComponentComponent,
    ProjectStatusComponent,
    GovernoratesComponent,
    ContractorsComponent,
    EndUsersComponent
  ],
    
  providers: [ConfirmationService,
    MessageService,],

})
export class ProjectModule { }

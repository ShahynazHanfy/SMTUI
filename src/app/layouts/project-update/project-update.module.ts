import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectUpdateRoutingModule } from './project-update-routing.module';
import { ProjectUpdateComponent } from './project-update/project-update.component';
// import { MatCardModule} from '@angular/material/card';  
// import { MatButtonModule} from '@angular/material/button';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StepsModule } from 'primeng/steps';
// import { NgWizardModule } from 'ng-wizard';
import {InputNumberModule} from 'primeng/inputnumber';
import {SelectButtonModule} from 'primeng/selectbutton';
import {RatingModule} from 'primeng/rating';


@NgModule({
  declarations: [ProjectUpdateComponent],
  imports: [
    CommonModule,
    ProjectUpdateRoutingModule,
    RatingModule,
    // MatButtonModule,
    // MatCardModule,
    FormsModule,
    SelectButtonModule,
    AccordionModule,
    // MatDialogModule,
    StepsModule,
    InputNumberModule,
    ButtonModule,
    // NgWizardModule,
    HttpClientModule,
    // MatFormFieldModule,
    // FontAwesomeModule,
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
  ]
})
export class ProjectUpdateModule { }

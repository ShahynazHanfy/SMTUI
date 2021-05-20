import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {AccordionModule} from 'primeng/accordion'; 
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { SliderModule } from "primeng/slider";
import { MultiSelectModule } from "primeng/multiselect";
import { ContextMenuModule } from "primeng/contextmenu";
import { DialogModule } from "primeng/dialog";
import { ProgressBarModule } from "primeng/progressbar";
import { FileUploadModule } from "primeng/fileupload";
import { ToolbarModule } from "primeng/toolbar";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DragDropModule } from "primeng/dragdrop";
import { PickListModule } from "primeng/picklist";
import { ProjectRouting } from "./layouts/project/project-routing";
import { RatingModule } from "primeng/rating";
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    BrowserAnimationsModule,
    RatingModule,

    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    // AppRoutingModule,
    // MatDialogModule,
    AccordionModule,
    ProjectRouting,
    ButtonModule,
    DialogModule,
    FormsModule,
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
    // AngularMultiSelectModule

  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

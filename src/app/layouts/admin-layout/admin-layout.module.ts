import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import { ProjectComponent } from "../project/project/project.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { AllUsersComponent } from "../../components/all-users/all-users.component";
import { ProjectComponentComponent } from "../../components/project-component/project-component.component";
import { ProjectStatusComponent } from "../../components/project-status/project-status.component";
import { GovernoratesComponent } from "../../components/governorates/governorates.component";
import { ContractorsComponent } from "../../components/contractors/contractors.component";
import { EndUsersComponent } from "../../components/end-users/end-users.component";
import { ReactiveFormsModule} from '@angular/forms'
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    CommonModule,
    RatingModule,
    ReactiveFormsModule,
    TableModule,
    ToastModule,
    SliderModule,
    AccordionModule,
    DialogModule,
    ButtonModule,
    ConfirmDialogModule,
  //  TooltipModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    AllUsersComponent,

    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ConfirmationService,MessageService]
})

export class AdminLayoutModule {}

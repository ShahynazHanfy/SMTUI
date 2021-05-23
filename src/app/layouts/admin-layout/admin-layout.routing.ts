import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ProjectStatusComponent } from 'app/components/project-status/project-status.component';
import { AllUsersComponent } from 'app/components/all-users/all-users.component';
import { GovernoratesComponent } from 'app/components/governorates/governorates.component';
import { ContractorsComponent } from 'app/components/contractors/contractors.component';
import { EndUsersComponent } from 'app/components/end-users/end-users.component';
import { ProjectComponentComponent } from "../../components/project-component/project-component.component";
import { LoginComponent } from 'app/components/login/login.component';
export const AdminLayoutRoutes: Routes = [
    // { path: 'project', loadChildren: () => import('../project/project.module').then(mod => mod.ProjectModule) },
    { path: '', component: DashboardComponent },
    { path: 'admin/dashboard', component: DashboardComponent },
    { path: 'admin/user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: 'table', component: TableComponent },
    { path: 'admin/AllUsers', component: AllUsersComponent },
    { path: 'admin/ProComponents', component: ProjectComponentComponent },
    { path: 'admin/Governorates', component: GovernoratesComponent },
    { path: 'admin/Contractors', component: ContractorsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'admin/EndUsers', component: EndUsersComponent },
    { path: 'admin/projects', loadChildren: () => import('../project/project.module').then(mod => mod.ProjectModule) },
    { path: 'admin/projects/projectUpdate/:projectId', loadChildren: () => import('../project-update/project-update.module').then(mod => mod.ProjectUpdateModule) },
    { path: 'admin/maps', component: MapsComponent },
    { path: 'admin/notifications', component: NotificationsComponent },
    { path: 'admin/upgrade', component: UpgradeComponent },
    { path: 'admin/projectStatus', component: ProjectStatusComponent },
];

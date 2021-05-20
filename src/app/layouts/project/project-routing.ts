import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from 'src/app/Components/navbar/navbar.component';
import { Project } from '../../shared/Models/Project';
import { AddProjectComponent } from './add-project/add-project.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { EndUsersComponent } from './end-users/end-users.component';
import { GovernoratesComponent } from './governorates/governorates.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { ProjectStatusComponent } from './project-status/project-status.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
{
  path: '', component: ProjectComponent,
},
{ path: 'container/project/addProject', component: AddProjectComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ProjectRouting { }

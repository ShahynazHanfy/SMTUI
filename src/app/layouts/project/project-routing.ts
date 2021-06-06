import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/helpers/auth.guard';
// import { NavbarComponent } from 'src/app/Components/navbar/navbar.component';
import { Project } from '../../shared/Models/Project';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
{
  path: '', component: ProjectComponent,
},
{ path: 'container/project/addProject', component: AddProjectComponent ,canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ProjectRouting { }

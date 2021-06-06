import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/helpers/auth.guard';
import { ProjectUpdateComponent } from './project-update/project-update.component';

const routes: Routes = [
  {
    path: '', component: ProjectUpdateComponent,canActivate: [AuthGuard]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectUpdateRoutingModule { }

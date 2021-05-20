import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectUpdateComponent } from './project-update/project-update.component';

const routes: Routes = [
  {
    path: '', component: ProjectUpdateComponent
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectUpdateRoutingModule { }

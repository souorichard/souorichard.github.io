import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }

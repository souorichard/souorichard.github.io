import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }

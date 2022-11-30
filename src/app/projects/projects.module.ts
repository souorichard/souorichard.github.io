import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProjectsModule { }

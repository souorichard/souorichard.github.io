import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { AboutComponent } from './about.component';
import { AboutCardComponent } from './about-card/about-card.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }

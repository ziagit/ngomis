import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisRoutingModule } from './mis-routing.module';
import { MisComponent } from './mis.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { MaterialModule } from './shared/modules/material/material.module';


@NgModule({
  declarations: [
    MisComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule,
    MisRoutingModule,
    MaterialModule
  ]
})
export class MisModule { }

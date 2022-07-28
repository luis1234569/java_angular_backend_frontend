import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './ts-usuario/user.component';
import { TsticketComponent } from './ts-ticket/ts-ticket.component';
import { TsCarreraFormComponent } from './ts-carrera/form/ts-carrera.form.component';
import { TsCarreraListComponent } from './ts-carrera/list/ts-carrera-list.component';
import { CarreraToolbarComponent } from './ts-carrera/toolbar/carrera-toolbar.component';

@NgModule({
  declarations: [
    TsCarreraFormComponent ,
    UserComponent,
    TsticketComponent,
    TsCarreraListComponent,
    CarreraToolbarComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }

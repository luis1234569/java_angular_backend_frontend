import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './ts-usuario/form/user.form.component';
import { TsticketComponent } from './ts-ticket/ts-ticket.component';
import { TsCarreraFormComponent } from './ts-carrera/form/ts-carrera.form.component';
import { TsCarreraListComponent } from './ts-carrera/list/ts-carrera-list.component';
import { CarreraToolbarComponent } from './ts-carrera/toolbar/carrera-toolbar.component';
import { UserListComponent } from './ts-usuario/list/user-list.component';
import { UserToolbarComponent } from './ts-usuario/toolbar/user-toolbar.component';

@NgModule({
  declarations: [
    TsCarreraFormComponent ,
    UserFormComponent,
    TsticketComponent,
    TsCarreraListComponent,
    CarreraToolbarComponent,
    UserListComponent,
    UserToolbarComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }

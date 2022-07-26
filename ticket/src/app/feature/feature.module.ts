import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { TsCarreraComponent } from './ts-carrera/ts-carrera.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './ts-usuario/user.component';
import { TsticketComponent } from './ts-ticket/ts-ticket.component';


@NgModule({
  declarations: [
    TsCarreraComponent,
    UserComponent,
    TsticketComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }

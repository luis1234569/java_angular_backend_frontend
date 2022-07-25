import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { TsCarreraComponent } from './ts-carrera/ts-carrera.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TsCarreraComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }

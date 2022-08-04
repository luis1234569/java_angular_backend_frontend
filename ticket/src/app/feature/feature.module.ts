import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './ts-usuario/form/user.form.component';
import { TsCarreraFormComponent } from './ts-carrera/form/ts-carrera.form.component';
import { TsCarreraListComponent } from './ts-carrera/list/ts-carrera-list.component';
import { CarreraToolbarComponent } from './ts-carrera/toolbar/carrera-toolbar.component';
import { UserListComponent } from './ts-usuario/list/user-list.component';
import { UserToolbarComponent } from './ts-usuario/toolbar/user-toolbar.component';
import { CarrerComboboxComponent } from './carrer/carrer-combobox.component';
import { TsUsuarioComboboxComponent } from './ts-usuario-combobox/ts-usuario-combobox.component';


import { TicketFormComponent } from './ticket/form/ticket.form.component';
import { TicketListComponent } from './ticket/list/ticket.list.component';
import { TicketToolbarComponent } from './ticket/toolbar/ticket.toolbar.component';
import { TipSearchComponent } from './tip/tip-search/tip-search.component';
import { AuthorizeSearchComponent } from './authorize/authorize-search/authorize-search.component';
import { EstudianteSearchComponent } from './authority/estudiante-search/estudiante-search.component';

@NgModule({
  declarations: [
    TsCarreraFormComponent ,
    UserFormComponent,
    TsCarreraListComponent,
    CarreraToolbarComponent,
    UserListComponent,
    UserToolbarComponent,
    CarrerComboboxComponent,
    TsUsuarioComboboxComponent,
    TicketFormComponent,
    TicketListComponent,
    TicketToolbarComponent,
    TipSearchComponent,
    AuthorizeSearchComponent,
    EstudianteSearchComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }


   


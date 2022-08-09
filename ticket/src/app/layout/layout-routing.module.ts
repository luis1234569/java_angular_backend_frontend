import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserFormComponent } from '../feature/ts-usuario/form/user.form.component';
import { TsCarreraFormComponent } from '../feature/ts-carrera/form/ts-carrera.form.component';
import { TsCarreraListComponent } from '../feature/ts-carrera/list/ts-carrera-list.component'
import { UserListComponent } from '../feature/ts-usuario/list/user-list.component';

import { TicketFormComponent } from '../feature/ticket/form/ticket.form.component';
import { TicketListComponent } from '../feature/ticket/list/ticket.list.component';
import { TkrespuestaFormComponent } from '../feature/tkrespuesta/form/tkrespuesta.form.component';
import { TkrespuestaListComponent } from '../feature/tkrespuesta/list/tkrespuesta-list.component';



const routes: Routes = [
  {path: '', component:MainComponent,
  children:[
    {path: '', component: DashboardComponent},
    {path: 'dashborad', component: DashboardComponent},
    {path: 'usuario-form', component: UserFormComponent },
    {path: 'usuario-form/:id', component: UserFormComponent },
    {path: 'usuario-list', component: UserListComponent },
    {path: 'carrera/:id', component: TsCarreraFormComponent },
    {path: 'carrera', component: TsCarreraFormComponent},
    {path: 'carrera-list', component: TsCarreraListComponent},
    {path: '', component:DashboardComponent},
    {path: 'tkrespuesta-form', component: TkrespuestaFormComponent},
    {path: 'tkrespuesta-form/:id', component: TkrespuestaFormComponent},
    {path: 'tkrespuesta-list', component: TkrespuestaListComponent}, 
    {path: 'ticket-form', component:TicketFormComponent},
    {path: 'ticket-form/:id', component:TicketFormComponent},
    {path: 'ticket-list', component:TicketListComponent},
    {path: 'dashboard', component:DashboardComponent}
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
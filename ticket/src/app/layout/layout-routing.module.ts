import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from '../feature/ts-usuario/user.component';
import { TsticketComponent } from '../feature/ts-ticket/ts-ticket.component';
import { TsCarreraFormComponent } from '../feature/ts-carrera/form/ts-carrera.form.component';
import { TsCarreraListComponent } from '../feature/ts-carrera/list/ts-carrera-list.component'

const routes: Routes = [
  {path: '', component:MainComponent,
  children:[
    {path: '', component: DashboardComponent},
    {path: 'dashborad', component: DashboardComponent},
    {path: 'usuario', component: UserComponent },
    {path: 'ticket', component: TsticketComponent},
    {path: 'carrera/:id', component: TsCarreraFormComponent },
    {path: 'carrera', component: TsCarreraFormComponent},
    {path: 'carrera-list', component: TsCarreraListComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

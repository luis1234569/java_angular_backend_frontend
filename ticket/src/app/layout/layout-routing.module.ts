import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from '../feature/ts-usuario/user.component';
import { TsticketComponent } from '../feature/ts-ticket/ts-ticket.component';
import { TsCarreraFormComponent } from '../feature/ts-carrera/form/ts-carrera.form.component';

const routes: Routes = [
  {path: '', component:MainComponent,
  children:[
    {path: '', component: DashboardComponent},
    {path: 'dashborad', component: DashboardComponent},
    {path: 'usuario', component: UserComponent },
    {path: 'ticket', component: TsticketComponent},
    {path: 'carrera', component: TsCarreraFormComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

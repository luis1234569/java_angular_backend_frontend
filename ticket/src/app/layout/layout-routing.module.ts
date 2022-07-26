import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TsCarreraComponent } from '../feature/ts-carrera/ts-carrera.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from '../feature/ts-usuario/user.component';
import { TsticketComponent } from '../feature/ts-ticket/ts-ticket.component';

const routes: Routes = [
  {path: '', component:MainComponent,
  children:[
    {path: '', component: DashboardComponent},
    {path: 'carrera', component: TsCarreraComponent},
    {path: 'usuario', component: UserComponent },
    {path: 'ticket', component: TsticketComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

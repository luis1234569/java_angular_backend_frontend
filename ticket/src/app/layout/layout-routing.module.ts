import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketFormComponent } from '../feature/ticket/form/ticket.form.component';
import { TicketListComponent } from '../feature/ticket/list/ticket.list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'ticket-form', component:TicketFormComponent},
      {path: 'ticket-form/:id', component:TicketFormComponent},
      {path: 'ticket-list', component:TicketListComponent},
      {path: 'dashboard', component:DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

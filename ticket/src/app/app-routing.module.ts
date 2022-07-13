import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TsticketComponent } from './ts-ticket/ts-ticket.component';

const routes: Routes = [
  {path: 'tsticket', component:TsticketComponent},
  {path: 'tsticket/:id', component:TsticketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

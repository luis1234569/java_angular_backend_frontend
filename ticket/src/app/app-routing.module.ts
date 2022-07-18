import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TsCarreraComponent } from './ts-carrera/ts-carrera.component';
import { TsticketComponent } from './ts-ticket/ts-ticket.component';
import { UserComponent } from './ts-usuario/user.component';

const routes: Routes = [
  {path: 'tsticket', component:TsticketComponent},
  {path: 'tsticket/:id', component:TsticketComponent},
  {path: 'Usuario', component:UserComponent},
  {path: 'Usuario/:id', component:UserComponent},
  {path: 'carrera',component:TsCarreraComponent },
  {path: 'carrera/:id', component:TsCarreraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

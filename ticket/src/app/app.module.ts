import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TsticketComponent } from './ts-ticket/ts-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './ts-usuario/user.component';

@NgModule({
  declarations: [
    AppComponent,
    TsticketComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

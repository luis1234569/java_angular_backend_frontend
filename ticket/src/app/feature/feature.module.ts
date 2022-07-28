import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { TicketFormComponent } from './ticket/form/ticket.form.component';
import { FormsModule } from '@angular/forms';
import { TicketListComponent } from './ticket/list/ticket.list.component';
import { TicketToolbarComponent } from './ticket/toolbar/ticket.toolbar.component';
import { CarreraComboboxComponent } from './career/career-combobox.component';
import { TipSearchComponent } from './tip/tip-search/tip-search.component';


@NgModule({
  declarations: [
    TicketFormComponent,
    TicketListComponent,
    TicketToolbarComponent,
    CarreraComboboxComponent,
    TipSearchComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }



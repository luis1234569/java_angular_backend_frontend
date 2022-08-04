import {
  Component,
  OnInit
} from '@angular/core';

import {
  Ticket
} from '../ticket';
import {
  TicketService
} from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket.list.component.html'
})
export class TicketListComponent implements OnInit {

  constructor(
    private ticketService: TicketService,
     ) {}

  ticketList: Ticket[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.ticketService.findAll().subscribe(
      (response) => {
        this.ticketList = response;
      }
    )
  }



  public findByMotivo(term: string): void {
    if (term.length >= 2) {
      this.ticketService.findByMotivo(term).subscribe(
        (response) => this.ticketList = response

      )
    }
    if (term.length === 0) {
      this.findAll();
    }

  }



}

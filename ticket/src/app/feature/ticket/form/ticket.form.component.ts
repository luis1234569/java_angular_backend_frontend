import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Tip } from '../../tip/tip';
import {TipService } from '../../tip/tip.service';
import {Ticket} from '../ticket';
import {TicketService} from '../ticket.service';


@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket.form.component.html'
})
export class TicketFormComponent implements OnInit {

  constructor(
    private ticketService: TicketService,
    private activatedRoute: ActivatedRoute,
    private tipService: TipService,
    private router:Router
  ) {}

  currentEntity: Ticket = {
    ticketId: 0,
    name: "",
    carreraId: 0,
    modulo: true,
    motivo: "",
    telefono: "",
    created: new Date(),
    updates: new Date(),
    enabled: true,
    tips: []
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")) {
          this.findById(parseInt(params.get("id") !));
        }
      }
    )
  }

  save(): void {
    console.log(this.currentEntity);
    this.ticketService.save(this.currentEntity)
      .subscribe(
        () => {
          this.currentEntity = {
            ticketId: 0,
            name: "",
            carreraId: 0,
            modulo: true,
            motivo: "",
            telefono: "",
            created: new Date(),
            updates: new Date(),
            enabled: true,
            tips: []
          };
          this.router.navigate(['/layout/ticket-list']);
        }
      )
  }

  findById(id: number):void {
    this.ticketService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.tips.forEach(
          (tip) => {
            this.tipService.findById(tip.id).subscribe(
              (item) => tip.name = item.name
            )
          }
        )
      }
    )
  }


  deleteById(): void {
    this.ticketService.deleteById(this.currentEntity.ticketId).subscribe(
      () => {
        console.log("El ticket ha sido borrado");
      }
    )
  }

  removeTip(id: number):void {

    this.currentEntity.tips =
    this.currentEntity.tips.filter(
      (item) => item.id != id
    );
  }

  addTips(tip: Tip):void {
    tip.ticketId=this.currentEntity.ticketId;
    tip.tipId=tip.id;
    this.currentEntity.tips.push(tip);
  }
}

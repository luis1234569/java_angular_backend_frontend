import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Tsticket
} from './ts-ticket';
import {
  TsticketService
} from './ts-ticket.service';

@Component({
  selector: 'app-tsticket',
  templateUrl: './ts-ticket.component.html'
})
export class TsticketComponent implements OnInit {

  constructor(
    private tsticketService: TsticketService,
    private activatedRoute: ActivatedRoute
  ) {}

  currentEntity: Tsticket = {
    tsticketId: 0,
    dni: "",
    carrera: "",
    modulo: true,
    motivo: "",
    sugerencia: "",
    descripcion: "",
    telefono: "",
    created: new Date(),
    updates: new Date(),
    enabled: true
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
    console.table(this.currentEntity);
    this.tsticketService.save(this.currentEntity)
      .subscribe(
        () => {
          this.currentEntity = {
            tsticketId: 0,
            dni: "",
            carrera: "",
            modulo: true,
            motivo: "",
            sugerencia: "",
            descripcion: "",
            telefono: "",
            created: new Date(),
            updates: new Date(),
            enabled: true
          };
        }
      )
  }

  findById(id: number): void {
    this.tsticketService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById(): void {
    this.tsticketService.deleteById(this.currentEntity.tsticketId).subscribe(
      () => {
        console.log("El ticket ha sido borrado");
      }
    )
  }

}

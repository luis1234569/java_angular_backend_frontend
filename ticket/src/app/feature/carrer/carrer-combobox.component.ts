import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carrera } from './carrer';
import { CarreraService } from './carrer.service';

@Component({
  selector: 'app-carrer-combobox',
  templateUrl: './carrer-combobox.component.html'
})
export class CarrerComboboxComponent implements OnInit {

  constructor(
    private CarreraService: CarreraService
  ) { }

  carreras: Carrera[] = [];
  @Output() carreraIdEmitter = new EventEmitter<number>();
  @Input() carreraId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.CarreraService.findAll().subscribe(
      (respose) => this.carreras = respose
    )
  }

  public onSelect(id:string){
    console.log("El id de la carrer es:" + id);
    this.carreraIdEmitter.emit(parseInt(id));
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carrera } from './carrera';
import { CarreraService } from './carrera.service';

@Component({
  selector: 'app-carrera-combobox',
  templateUrl: './carrera-combobox.component.html'
})
export class CarreraComboboxComponent implements OnInit {

  constructor(
    private carreraService: CarreraService
  ) { }

  carreras: Carrera[] = [];
  @Output() carreraIdEmitter = new EventEmitter<number>();
  @Input() carreraId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.carreraService.findAll().subscribe(
      (respose) => this.carreras = respose
    )
  }

  public onSelect(id:string){
    console.log("El id de la ciudad es:" + id);
    this.carreraIdEmitter.emit(parseInt(id));
  }

}

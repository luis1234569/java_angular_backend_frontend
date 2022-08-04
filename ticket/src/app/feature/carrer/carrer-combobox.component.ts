import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carrera } from './carrer';
import { CarrerComboboxService } from './carrer.service';

@Component({
  selector: 'app-carrera-combobox',
  templateUrl: './carrer-combobox.component.html'
})
export class CarrerComboboxComponent implements OnInit {

  constructor(
    private carrerComboboxService: CarrerComboboxService
  ) { }

  carreras: Carrera[] = [];
  @Output() carreraIdEmitter = new EventEmitter<number>();
  @Input() carreraId: number = 0;
 
  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.carrerComboboxService.findAll().subscribe(
      (respose) => this.carreras = respose
    )
  }

  public onSelect(id:string){
    console.log("El id de la carrer es:" + id);
    this.carreraIdEmitter.emit(parseInt(id));
  }

}

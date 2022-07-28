import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Career } from './career';
import { CarreraService } from './career.service';

@Component({
  selector: 'app-carrera-combobox',
  templateUrl: './career-combobox.component.html'
})
export class CarreraComboboxComponent implements OnInit {

  constructor(
    private carreraService: CarreraService
  ) { }

  carreras: Career[] = [];
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
    this.carreraIdEmitter.emit(parseInt(id));
  }

}

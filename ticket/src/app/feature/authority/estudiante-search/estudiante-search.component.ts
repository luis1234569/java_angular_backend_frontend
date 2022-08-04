import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-estudiante-search',
  templateUrl: './estudiante-search.component.html'
})
export class EstudianteSearchComponent implements OnInit {

  constructor(
    private estudianteService : EstudianteService
  ) { }

  estudiante : Estudiante [] = [];

  @Output() estudianteEmiter = new EventEmitter<Estudiante>();

  ngOnInit(): void {
  }

  OnInput(term: string): void {
    if (term.length>2){
      this.estudianteService.findByName(term).subscribe(
        (respose) => this.estudiante = respose
      )
    }
    if (term.length === 0){
      this.estudiante = [];
    }
  }

  onSelect(estudiantes : Estudiante): void{
    this.estudianteEmiter.emit(estudiantes);
  }
}

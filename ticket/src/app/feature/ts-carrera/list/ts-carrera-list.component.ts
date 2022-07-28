import { Component, OnInit } from '@angular/core';
import { Carrera } from '../carrera';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-ts-carrera-list',
  templateUrl: './ts-carrera-list.component.html'
})
export class TsCarreraListComponent implements OnInit {

  constructor(
    private carreraService : CarreraService
  ) { }

  carreraList: Carrera[] = [];

  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void {
    this.carreraService.findAll().subscribe(
      (response) => this.carreraList = response
    )
  }
  public findByName(term: string): void{
    if (term.length>=2){
      this.carreraService.findByName(term).subscribe(
        (response) => this.carreraList = response
      )
    }
    if(term.length === 0){
      this.findAll();
    }
  }

}

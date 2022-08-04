import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from '../../authority/estudiante.service';
import { Carrera } from '../carrera';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-ts-carrera-form',
  templateUrl: './ts-carrera.form.component.html',
})
export class TsCarreraFormComponent implements OnInit {
  constructor(
    private carreraService    : CarreraService,
    private activateRouter    : ActivatedRoute,
    private router            : Router,
    private estudianteService : EstudianteService,
  ) { }

  currentEntity: Carrera ={
    carreraId : 0,
    name : '',
    created : new Date(),
    updated : new Date(),
    archived: true,
    enable  : true,
    personId : 0,
    carreraEstudiante:[]
  }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(
      (params) => {
        if(params.get('id')){
          this.findById(parseInt(params.get('id')!));
        }
      }
    )
  }
  save():void{
    this.carreraService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity=
        {
          carreraId : 0,
          name : '',
          created : new Date(),
          updated : new Date(),
          archived: true,
          enable  : true,
          personId : 0,
          carreraEstudiante: []
        };
      this.router.navigate(["/layout/carrera-list"])
      }
    )
  }
  findById(id : number):void {
    this.carreraService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.carreraEstudiante.forEach(
          (est) => {
            this.estudianteService.findById(est.personId).subscribe(
              (item) => est.name = item.name
            )
          }
        )
      }
    );
  }
  deleteById():void{
    this.carreraService.deleteById(this.currentEntity.carreraId).subscribe(
      ()=>{
        console.log('La carrera se elimino satisfactoriamente');
      }
    )
  }
  removeEstudiante(id: number):void {
    this.currentEntity.carreraEstudiante =
    this.currentEntity.carreraEstudiante.filter(
      (item) => item.personId != id
    )
  }

}

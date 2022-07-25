import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrera } from './carrera';
import { CarreraService } from './carrera.service';

@Component({
  selector: 'app-ts-carrera',
  templateUrl: './ts-carrera.component.html',
})
export class TsCarreraComponent implements OnInit {
  constructor(
    private carreraService : CarreraService,
    private activateRouter : ActivatedRoute,
  ) { }

  currentEntity: Carrera ={
    carreraId : 0,
    name : '',
    created : new Date(),
    updated : new Date(),
    archived: true,
    enable  : true
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
          enable  : true
        }
      }
    )
  }
  findById(id : number):void {
    this.carreraService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
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

}

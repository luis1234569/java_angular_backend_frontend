import { Component, OnInit } from '@angular/core';
import { Tkrespuesta } from '../tkrespuesta';
import { TkrespuestaService } from '../tkrespuesta.service';

@Component({
  selector: 'app-tkrespuesta-list',
  templateUrl: './tkrespuesta-list.component.html'
})
export class TkrespuestaListComponent implements OnInit {

  constructor(
    private tkrespuestaService: TkrespuestaService
  ) { }

  tkrespuestaList: Tkrespuesta[]= [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{
    this.tkrespuestaService.findAll().subscribe(
      (response)=> this.tkrespuestaList = response
    )
  }

  public findByComment(term: String): void{
    if (term.length>=3){
      this.tkrespuestaService.findByComment(term).subscribe(
        (response)=> this.tkrespuestaList = response
      )
    }

    if (term.length===0){
      this.findAll();
    }
  }

}

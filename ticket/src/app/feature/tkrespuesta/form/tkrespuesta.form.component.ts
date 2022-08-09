import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authority } from '../../authority/authority';
import { AuthorityService } from '../../authority/authority.service';
import { Tkrespuesta } from '../tkrespuesta';
import { TkrespuestaService } from '../tkrespuesta.service';

@Component({
  selector: 'app-tkrespuesta-form',
  templateUrl: './tkrespuesta.form.component.html'
})
export class TkrespuestaFormComponent implements OnInit {

  constructor(
    private tkrespuestaService: TkrespuestaService,
    private authorityService: AuthorityService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


currentEntity: Tkrespuesta ={

  tkrespuestaId: 0,
  comment: "",
  yesno: true,
  datecreate: new Date(),
  needId: 0,
  authorities: []
 
};
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
          
        }
      }
    )
  }

  save(): void{
    console.table(this.currentEntity);
    this.tkrespuestaService.save(this.currentEntity).subscribe(
      ()=>{
        this.currentEntity ={

          tkrespuestaId: 0,
          comment: "",
          yesno: true,
          datecreate: new Date(),
          needId: 0,
          authorities: []
         
      };
      this.router.navigate(['layout/tkrespuesta-list']);
      }
       
    )
  }

  findById(id: number):void {
    this.tkrespuestaService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.authorities.forEach(
          (auth)=>{
            this.authorityService.findById(auth.id).subscribe(
              (item)=> auth.name = item.name
            )
          }
        )
      }
    )
  }

  deleteById():void{
    this.tkrespuestaService.deleteById(this.currentEntity.tkrespuestaId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

  removeAuthority(id: number): void{
    this.currentEntity.authorities =
    this.currentEntity.authorities.filter(
      (item)=> item.id != id
    )
  }
}

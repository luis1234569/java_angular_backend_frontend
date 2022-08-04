import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizeService } from '../../authorize/authorize.service'; 
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user.form.component.html'
})
export class UserFormComponent implements OnInit {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private authorizeService: AuthorizeService,
    private router         : Router
  ) { }

  currentEntity: User =
  {
    personId: 0,
    name: "",
    mail: "",
    login: "",
    contra: "",
    rol: "",
    enabled: true, 
    created: new Date(),
    carreraId: 0,
    authorities : []
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.userService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          personId: 0,
          name: "",
          mail: "",
          login: "",
          contra: "",
          rol: "",
          enabled: true,
          created: new Date(),
          carreraId: 0,
          authorities: []
          
        };
        this.router.navigate(["/layout/usuario-list"]) 
      }
    )
  }

  findById(id: number):void {
    this.userService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      
         this.currentEntity.authorities.forEach(
           (auth) => {
             this.authorizeService.findById(auth.id).subscribe(
               (item) => auth.name = item.name
             )
           }
         )
      }
    )
  }

  deleteById():void{
    this.userService.deleteById(this.currentEntity.personId).subscribe(
      () => {
        console.log("registro Borrado");
      }
    )
  }

  removeAuthorize(id: number):void {

    this.currentEntity.authorities =
    this.currentEntity.authorities.filter(
      (item) => item.id != id 
    );
  }
}

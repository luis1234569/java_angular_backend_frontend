import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user.form.component.html'
})
export class UserFormComponent implements OnInit {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
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
    carreraId: 0
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
          carreraId: 0
        };
      }
    )
  }

  findById(id: number):void {
    this.userService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
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

}
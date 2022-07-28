import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  userList: User[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.userService.findAll().subscribe(
      (response) => this.userList = response
    )
  }

  public findByName(term: string): void{
    if (term.length>=2){
      this.userService.findByName(term).subscribe(
        (response) => this.userList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

}

}
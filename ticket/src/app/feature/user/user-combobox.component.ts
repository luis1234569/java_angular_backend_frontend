import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-combobox',
  templateUrl: './user-combobox.component.html'
})
export class UserComboboxComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  users: User[] = [];
  @Output() userIdEmitter = new EventEmitter<number>();
  @Input() userId: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.userService.findAll().subscribe(
      (respose) => this.users = respose
    )
  }

  public onSelect(id:string){
    this.userIdEmitter.emit(parseInt(id));
  }

}

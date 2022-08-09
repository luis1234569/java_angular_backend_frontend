import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Need } from './need';
import { NeedService } from './need.service';

@Component({
  selector: 'app-need-combobox',
  templateUrl: './need-combobox.component.html'
})
export class NeedComboboxComponent implements OnInit {

  constructor(
    private needService: NeedService
  ) { }

  needs: Need[]=[];
  @Output() needIdEmitter = new EventEmitter<number>();
  @Input() needId: number=0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.needService.findAll().subscribe(
      (response)=> this.needs =response
    )
  }

  public onSelect(id:string){
    console.log("El id es"+id);
    this.needIdEmitter.emit(parseInt(id));
  }
}

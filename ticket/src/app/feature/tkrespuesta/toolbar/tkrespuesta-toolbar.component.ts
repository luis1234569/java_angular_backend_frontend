import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tkrespuesta-toolbar',
  templateUrl: './tkrespuesta-toolbar.component.html'
})
export class TkrespuestaToolbarComponent implements OnInit {

  @Input() entityName: string="";
  @Output() termEmitter = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  public onInput(term: String){
    this.termEmitter.emit(term);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tip } from '../tip';
import { TipService } from '../tip.service';

@Component({
  selector: 'app-tip-search',
  templateUrl: './tip-search.component.html'
})
export class TipSearchComponent implements OnInit {

  constructor(
    private tipService: TipService
  ) { }

  tips: Tip[] = [];

  @Output() tipEmitter = new EventEmitter<Tip>();

  ngOnInit(): void {
  }

  onInput(term: string):void {
    if (term.length>=1){
      this.tipService.findByName(term).subscribe(
        (response) => this.tips = response
      )
    }
    if (term.length===0){
      this.tips = [];
    }

  }

  onSelect(tip: Tip):void {
    console.log(tip)
    this.tipEmitter.emit(tip);
  }

}

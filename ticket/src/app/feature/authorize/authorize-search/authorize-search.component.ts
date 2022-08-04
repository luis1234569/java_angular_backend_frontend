import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Authorize} from '../authorize';
import { AuthorizeService } from '../authorize.service';

@Component({
  selector: 'app-authorize-search',
  templateUrl: './authorize-search.component.html'
})
export class AuthorizeSearchComponent implements OnInit {

  constructor(
    private authorizeService: AuthorizeService
  ) { }

  authorities: Authorize[] = [];

  @Output() authorizeEmitter = new EventEmitter<Authorize>();

  ngOnInit(): void {
  }

  onInput(term: string):void {
    if (term.length>=2){
      this.authorizeService.findByName(term).subscribe(
        (response) => this.authorities = response
      )
    }
    if (term.length===0){
      this.authorities = [];
    }

  }

  onSelect(authorize: Authorize):void {
    this.authorizeEmitter.emit(authorize);
  }

}

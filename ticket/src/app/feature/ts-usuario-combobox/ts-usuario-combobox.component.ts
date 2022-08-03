import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from './ts-usuario-combobox';
import { TsUsuarioComboboxService } from './ts-usuario-combobox.service';

@Component({
  selector: 'app-ts-usuario-combobox',
  templateUrl: './ts-usuario-combobox.component.html'
})
export class TsUsuarioComboboxComponent implements OnInit {

  constructor(
    private tsUsuarioComboboxService : TsUsuarioComboboxService
  ) { }


  usuarios: Usuario[] = [];
  @Output() usuarioIdEmiter = new EventEmitter<number>();
  @Input() usuarioId: number = 0;

  ngOnInit(): void {
    this.findAll()
  }

  public findAll(): void{
    this.tsUsuarioComboboxService.findAll().subscribe(
      (response) => this.usuarios = response
    )
  }

  public onSelect(id : string){
    console.log("el id de la persona es"+id)
    this.usuarioIdEmiter.emit(parseInt(id));
  }

}

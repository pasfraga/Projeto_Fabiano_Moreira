import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario:Usuario = new Usuario;

  constructor(
    protected usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  onsubmit(form){
    console.log(this.usuario);
    this.usuarioService.save(this.usuario)
    .subscribe(
      res=>{
        console.log("Cadastrado!", res);
      },
      xuxu=>{
        console.log("Não cadastrado!",xuxu);
      }
    )
  }

}

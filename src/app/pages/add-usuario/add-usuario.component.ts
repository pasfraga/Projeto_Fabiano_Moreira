import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario: Usuario = new Usuario;
  protected id: string = null;

  constructor(
    protected usuarioService: UsuarioService,
    protected router: Router,
    protected ativedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.ativedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.usuarioService.get(this.id).subscribe(
        res => {
          this.usuario = res;
        },
        erro => this.id = null
      )
    }
  }

  onsubmit(form) {
    console.log(this.usuario);
    if(this.id){
      this.usuarioService.update(this.usuario,this.id)
      .subscribe(
        res => {
          console.log("Atualizado!", res);
          form.reset();
          //this.router.navigate(["/"])
          this.router.navigateByUrl('/', { skipLocationChange: true })
            .then(() =>
              this.router.navigate(['/addUsuario']));
          alert("Atualizado!");
        },
        err => {
          console.log("Não atualizado!", err);
          alert("Não atualizado!");
        }
      )
    }else{
      this.usuarioService.save(this.usuario)
      .subscribe(
        res => {
          console.log("Cadastrado!", res);
          form.reset();
          //this.router.navigate(["/"])
          this.router.navigateByUrl('/', { skipLocationChange: true })
            .then(() =>
              this.router.navigate(['/addUsuario']));
          alert("Cadastrado!");
        },
        err => {
          console.log("Não cadastrado!", err);
          alert("Não cadastrado!");
        }
      )
    }
   
  }

}
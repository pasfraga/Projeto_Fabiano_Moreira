import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {

  protected evento: Evento = new Evento;
  protected id: string = null;

  constructor(
    protected eventoService: EventoService,
    protected router: Router,
    protected ativedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.ativedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.eventoService.get(this.id).subscribe(
        res => {
          this.evento = res;
        },
        erro => this.id = null
      )
    }
  }

  onsubmit(form) {
    console.log(this.evento);
    if(this.id){
      this.eventoService.update(this.evento,this.id)
      .subscribe(
        res => {
          console.log("Atualizado!", res);
          form.reset();
          //this.router.navigate(["/"])
          this.router.navigateByUrl('/', { skipLocationChange: true })
            .then(() =>
              this.router.navigate(['/addEvento']));
          alert("Atualizado!");
        },
        err => {
          console.log("Não atualizado!", err);
          alert("Não atualizado!");
        }
      )
    }else{
    this.eventoService.save(this.evento)
      .subscribe(
        res => {
          console.log("Cadastrado!", res);
          form.reset();
          //this.router.navigate(["/"])
          this.router.navigateByUrl('/', { skipLocationChange: true })
          .then(() =>
          this.router.navigate(['/addEvento']));
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


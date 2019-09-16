import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {

  protected evento: Evento = new Evento;

  constructor(
    protected eventoService: EventoService,
    protected router: Router
  ) { }

  ngOnInit() {
  }

  onsubmit(form) {
    console.log(this.evento);
    this.eventoService.save(this.evento)
      .subscribe(
        res => {
          console.log("Cadastrado!", res);
          form.reset();
          //this.router.navigate(["/"])
          this.router.navigateByUrl('/', { skipLocationChange: true })
          .then(() =>
          this.router.navigate(['/addevento']));
          alert("Cadastrado!");
        },
        err => {
          console.log("Não cadastrado!", err);
          alert("Não cadastrado!");
        }
      )
  }

}
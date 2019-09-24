import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-evento',
  templateUrl: './page-evento.component.html',
  styleUrls: ['./page-evento.component.css']
})
export class PageEventoComponent implements OnInit {

  protected evento:any;
  protected id: string = null;


  constructor(
    protected eventoService:EventoService,
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
}

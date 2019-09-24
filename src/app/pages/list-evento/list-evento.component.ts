import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-list-evento',
  templateUrl: './list-evento.component.html',
  styleUrls: ['./list-evento.component.css']
})
export class ListEventoComponent implements OnInit {
  protected eventos:any;

  constructor(
    protected eventoService:EventoService
  ) { }
 
  ngOnInit() {
    this.eventos = this.eventoService.getAll();
  }
  apagar(evento){
    if(confirm("Apagar os dados do evento: \n" + evento.nome + "?")){
      this.eventoService.delete(evento.id).subscribe(
        res=>{
          alert("Evento apagado!");
        }
      )
    }
  }
 
 }
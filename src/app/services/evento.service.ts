import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../model/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  
  private db = environment.serveAPI;

  constructor(
    protected http:HttpClient
  ) { }

  save(evento:Evento){
    return this.http.post(this.db + "eventos", evento)
  }

  getAll(){
    return this.http.get(this.db + "eventos")
  }
  update (evento,id){
    return this.http.put(this.db + "eventos/"+id,evento)
  }
  delete (id){
    return this.http.delete(this.db+"eventos/"+id)
  }
  get(id){
    return this.http.get<Evento>(this.db+"eventos/"+id)
  }
}
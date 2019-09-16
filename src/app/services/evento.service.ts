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
}
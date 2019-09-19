import { Component, OnInit, Input } from '@angular/core';
import { EnderecoService } from '../../services/endereco.service';
import { Endereco } from '../../model/endereco';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() protected endereco:Endereco = new Endereco;

  constructor(
    protected enderecoService:EnderecoService,
  ) { }

  ngOnInit() {
  }
  protected cep: string;

  buscaCep() {
    if (this.cep.length > 7) {
      this.enderecoService.getEndereco(this.cep)
        .subscribe(
          res => {
            if(res.erro){
              alert("CEP não encontrado!")
            }
            console.log(res);
            this.endereco = res
          }
        )
    }
  }

}

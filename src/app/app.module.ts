import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNavComponent } from './pages/page-nav/page-nav.component';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { ListUsuarioComponent } from './pages/list-usuario/list-usuario.component';
import { PageFooterComponent } from './pages/page-footer/page-footer.component';
import { PageHeaderComponent } from './pages/page-header/page-header.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { ListEventoComponent } from './pages/list-evento/list-evento.component';
import { AddEventoComponent } from './pages/add-evento/add-evento.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    PageFooterComponent,
    PageHeaderComponent,
    PageHomeComponent,
    AddEventoComponent,
    ListEventoComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

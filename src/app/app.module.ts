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
import { ListProdutoComponent } from './pages/list-produto/list-produto.component';
import { AddProdutoComponent } from './pages/add-produto/add-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    PageFooterComponent,
    PageHeaderComponent,
    PageHomeComponent,
    ListProdutoComponent,
    AddProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

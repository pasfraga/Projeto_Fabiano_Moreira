import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { AddEventoComponent } from './pages/add-evento/add-evento.component';
import { PageEventoComponent } from './pages/page-evento/page-evento.component';


const routes: Routes = [
  { path: "", component: PageHomeComponent },
  { path: "addUsuario", component: AddUsuarioComponent },
  { path: "addUsuario/:id", component: AddUsuarioComponent },
  { path: "addEvento", component: AddEventoComponent },
  { path: "addEvento/:id", component: AddEventoComponent },
  { path: "pageEvento/:id", component: PageEventoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

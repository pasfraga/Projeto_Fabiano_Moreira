import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { AddEventoComponent } from './pages/add-evento/add-evento.component';


const routes: Routes = [
  { path: "", component: PageHomeComponent },
  { path: "addUsuario", component: AddUsuarioComponent },
  { path: "addEvento", component: AddEventoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

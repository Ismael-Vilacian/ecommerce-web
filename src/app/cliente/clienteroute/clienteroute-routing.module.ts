import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetalheComponent } from '../cliente-detalhe/cliente-detalhe.component';
import { ClienteComponent } from '../cliente/cliente.component';

const routes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente-detalhe', component: ClienteDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienterouteRoutingModule { }

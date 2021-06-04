import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ClienteDetalheComponent } from '../cliente-detalhe/cliente-detalhe.component';
import { ClienteComponent } from '../cliente/cliente.component';

const routes: Routes = [
  {path: 'cliente', component: ClienteComponent, canActivate:[AuthGuard]},
  {path: 'cliente-detalhe', component: ClienteDetalheComponent, canActivate:[AuthGuard]},
  {path: 'cliente-detalhe/:id', component: ClienteDetalheComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienterouteRoutingModule { }

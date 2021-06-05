import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from 'src/app/cliente/cliente/cliente.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ClienteDetalheComponent } from 'src/app/cliente/cliente-detalhe/cliente-detalhe.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: 'carro', component: ClienteComponent, canActivate:[AuthGuard]},
  {path: 'carro-detalhe', component: ClienteDetalheComponent, canActivate:[AuthGuard]},
  {path: 'carro-detalhe/:id', component: ClienteDetalheComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CarrorouteRoutingModule { }

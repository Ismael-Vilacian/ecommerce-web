import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { CarroComponent } from '../carro/carro.component';
import { CarroDetalheComponent } from '../carro-detalhe/carro-detalhe.component';

const routes: Routes = [
  {path: 'carro', component: CarroComponent, canActivate:[AuthGuard]},
  {path: 'carro-detalhe', component: CarroDetalheComponent, canActivate:[AuthGuard]},
  {path: 'carro-detalhe/:id', component: CarroDetalheComponent, canActivate:[AuthGuard]}
];
 
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrorouteRoutingModule { }

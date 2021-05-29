import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { MatTableModule } from '@angular/material/table'



@NgModule({
  declarations: [
    ClienteComponent
  ],
  exports: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class ClienteModule { }

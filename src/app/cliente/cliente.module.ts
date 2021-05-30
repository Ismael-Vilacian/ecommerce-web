import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ClienteComponent
  ],
  exports: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
    
  ]
})
export class ClienteModule { }

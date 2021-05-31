import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { ClienterouteModule } from './clienteroute/clienteroute.module';



@NgModule({
  declarations: [
    ClienteComponent,
    ClienteDetalheComponent
  ],
  exports: [
    ClienteComponent,
    ClienteDetalheComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ClienterouteModule
    
    
  ]
})
export class ClienteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CarroComponent } from './carro/carro.component';
import { CarroDetalheComponent } from './carro-detalhe/carro-detalhe.component';
import { CarrorouteModule } from './carroroute/carroroute.module';


@NgModule({
  declarations: [
    CarroComponent,
    CarroDetalheComponent
  ],
  exports: [
    CarroComponent,
    CarroDetalheComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CarrorouteModule,
    MatSelectModule

  ]
})
export class CarroModule { }

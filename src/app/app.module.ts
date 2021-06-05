import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteModule } from './cliente/cliente.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { LoginModule } from './login/login.module';
import { CarroComponent } from './carro/carro/carro.component';
import { CarroDetalheComponent } from './carro/carro-detalhe/carro-detalhe.component';
import {MatTableModule} from "@angular/material/table";



//export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    CarroDetalheComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ClienteModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDatepickerModule,
        NgxMaskModule.forRoot(),
        RouterModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        LoginModule,
        MatTableModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

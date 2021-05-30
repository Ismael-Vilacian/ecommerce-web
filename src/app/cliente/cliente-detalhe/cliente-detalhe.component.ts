import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'
import { ClienteDto } from 'src/model/cliente-dto';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class ClienteDetalheComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder
  ) { }

  formCliente: FormGroup;
  formSubmitAttempt: boolean;
  cliente: ClienteDto;

  ngOnInit(): void {
    this.formCliente = this.fb.group({
      id: [this.cliente.idUser],
      nome: [this.cliente.nome, [Validators.required, Validators.minLength(3)]],
      cpf: [this.cliente.cpf, [Validators.required]],
      dataNascimento: [this.cliente.dataNascimento]
    })
  }

  onSubmit(): void {

  }

  isFieldInvalid(field: string) {
    return (
      (!this.formCliente.get(field)?.valid && this.formCliente.get(field)?.touched) ||
      (this.formCliente.get(field)?.untouched && this.formSubmitAttempt) ||
      (this.formCliente.get(field)?.errors)
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE, } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'
import { ClienteDto } from 'src/model/cliente-dto';
import { ClienteService } from '../cliente.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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
    this.cliente = this.formCliente.value;
    this.clienteService.salvarCliente(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente salvo com sucesso!', false);
    });
  }

  isErrorState(control: FormControl | null, form: FormGroup | NgForm | null): boolean {
    return false;
  }

  get getControl(){
    return this.formCliente.controls;
  }

  

}

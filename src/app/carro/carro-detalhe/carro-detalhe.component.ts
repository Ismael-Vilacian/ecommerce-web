import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarroDto } from 'src/model/carro-dto';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro-detalhe',
  templateUrl: './carro-detalhe.component.html',
  styleUrls: ['./carro-detalhe.component.css']
})
export class CarroDetalheComponent implements OnInit {

  constructor(
    private carroService: CarroService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  formCarro: FormGroup;
  formSubmitAttempt: boolean;
  carro: CarroDto;
  inscricao: Subscription;


  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.carroService.buscarCarroPorId(id).subscribe(dados => {
            this.carro = dados;
            this.formCarro = this.fb.group({
              id: [this.carro.id],
              marca: [this.carro.marca],
              modelo: [this.carro.modelo],
              cor: [this.carro.cor],
              placa: [this.carro.placa],
              anoVeiculo: [this.carro.anoVeiculo],
              valorDiaria: [this.carro.valorDiaria]
            });
            console.log(this.formCarro);
          }, (error: any) => { console.error(error); });
        } else {
          this.formCarro = this.fb.group({
            id: [],
            marca: ['',],
            modelo: ['',],
            cor: ['',],
            placa: ['',],
            anoVeiculo: ['',],
            valorDiaria: [,]
          });
        }
      });
  }


  onSubmit(): void {

    this.carro = this.formCarro.value;
    if(this.carro.id == null){
      this.carroService.salvarCarro(this.carro).subscribe(() => {
        this.carroService.showMessage('Carro salvo com sucesso!', false);
      });
      this.router.navigate(['/carro']);
    }else{
      this.carroService.editarCarro(this.carro).subscribe(() => {
        this.carroService.showMessage('Carro salvo com sucesso!', false);
      });
      this.router.navigate(['/carro']);
    }
  }

  isErrorState(control: FormControl | null, form: FormGroup | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formCarro.controls;
  }

}

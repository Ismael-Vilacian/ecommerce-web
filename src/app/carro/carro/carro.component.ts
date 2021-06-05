import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroDto } from 'src/model/carro-dto';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  constructor(
    private carroService: CarroService,
    private location: Location,
    private router: Router
  ) { }
  
  displayedColumns: string[] = ['id', 'marca', 'modelo', 'cor', 'anoVeiculo', 'valorDiaria'];
  
  carro: CarroDto = { 
    id: 0,
    marca: '',
    modelo: '',
    cor: '',
    placa: '',
    anoVeiculo: '',
    valorDiaria: 0
  };

  carros: CarroDto[];
  dataSource: any;

  ngOnInit(): void {
    this.carroService.listarCarro().subscribe(dados => {
      this.carros = dados;
      this.dataSource = this.carros;
    })
  }

  salvar(): void{
    this.carroService.salvarCarro(this.carro).subscribe((dados) => {
      this.carroService.showMessage('Carro salvo com sucesso!', false);
      this.carros.push(dados);
      this.dataSource = this.carros;
      location.reload();
    });
  }

}

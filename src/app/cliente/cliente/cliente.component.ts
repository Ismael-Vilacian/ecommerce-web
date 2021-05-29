import { Component, OnInit } from '@angular/core';
import { ClienteDto } from 'src/model/cliente-dto';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['idUser', 'nome', 'cpf'];

  clientes: ClienteDto[] = [
    { idUser: 1, nome: 'kkkk11', cpf: '123.123.123-12', sexo: 'm', dataNascimento: new Date(1995, 11, 17), versao: 1 },
    { idUser: 2, nome: 'kkkk22', cpf: '222.222.222-22', sexo: 'm', dataNascimento: new Date(1995, 11, 17), versao: 1 },
    { idUser: 3, nome: 'kkkk33', cpf: '333.333.333-33', sexo: 'm', dataNascimento: new Date(1995, 11, 17), versao: 1 }
  ];

  dataSource = this.clientes;

  ngOnInit(): void {
  }

}

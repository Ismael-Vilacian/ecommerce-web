import { Component, OnInit } from '@angular/core';
import { ClienteDto } from 'src/model/cliente-dto';
import { ClienteService } from '../cliente.service';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['idUser', 'nome', 'cpf', 'acoes'];

  cliente: ClienteDto = { 
    idUser: 0, 
    nome: 'Service angular', 
    cpf: '70249731100', 
    sexo: 'm', 
    dataNascimento: new Date(1995, 11, 17), 
    versao: 1 
  };

  
  clientes: ClienteDto[];
  dataSource: any;

  ngOnInit(): void {
    this.clienteService.listarCliente().subscribe(dados => {
      this.clientes = dados;
      this.dataSource = this.clientes;
    })
  }

  salvar(): void{
    this.clienteService.salvarCliente(this.cliente).subscribe((dados) => {
      this.clienteService.showMessage('Cliente salvo com sucesso!', false);
      this.clientes.push(dados);
      this.dataSource = this.clientes;
      location.reload();
    });
  }
  editarCliente(cliente: ClienteDto): void{
    this.router.navigate(['/cliente-detalhe', cliente.idUser]);
  }
  deletarCliente(cliente: ClienteDto): void{
    debugger
    this.clienteService.deletarCliente(cliente.idUser);
  }
}

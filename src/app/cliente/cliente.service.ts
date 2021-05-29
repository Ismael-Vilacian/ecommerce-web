import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteDto } from 'src/model/cliente-dto';
import { EMPTY, Observable, Subscription } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private httpClient: HttpClient
  ) { }
  clientes: ClienteDto[];
  urlRoot = "http://localhost:9000/"

  listarCliente(): Observable<ClienteDto[]> {
    return this.httpClient.get<ClienteDto[]>('http://localhost:9000//api/cliente/').pipe(
      map((clientes) => clientes)
    );
  }
}

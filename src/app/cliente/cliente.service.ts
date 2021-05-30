import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteDto } from 'src/model/cliente-dto';
import { EMPTY, from, Observable, Subscription } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private httpClient: HttpClient
  ) { }
  clientes: ClienteDto[];
  url = `${environment.config.URL_API + '/cliente'}`;

  listarCliente(): Observable<ClienteDto[]> {
    return this.httpClient.get<ClienteDto[]>(this.url).pipe(
      map((clientes) => clientes)
    );
  }

  salvarCliente(cliente: ClienteDto): Subscription{
      return this.httpClient.post<ClienteDto>(this.url + '/add', cliente).subscribe(data =>{console.log(data);
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteDto } from 'src/model/cliente-dto';
import { EMPTY, from, Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar

  ) { }

  clientes: ClienteDto[];
  url = `${environment.config.URL_API + '/cliente'}`;

  listarCliente(): Observable<ClienteDto[]> {
    return this.httpClient.get<ClienteDto[]>(this.url).pipe(
      map((clientes) => clientes)
    );
  }

  salvarCliente(cliente: ClienteDto): Observable<ClienteDto> {
    return this.httpClient.post<ClienteDto>(this.url + '/add', cliente).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  editarCliente(cliente: ClienteDto): Observable<ClienteDto> {
    return this.httpClient.post<ClienteDto>(this.url + '/edit', cliente).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  buscarClientesPorId(id: number): Observable<ClienteDto> {
    return this.httpClient.get<ClienteDto>(this.url + id).pipe(
      map((cliente) => cliente)
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CarroDto } from 'src/model/carro-dto';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar

  ) { }

  carros: CarroDto[];
  url = `${environment.config.URL_API + '/carro'}`;

  listarCarro(): Observable<CarroDto[]> {
    
    return this.httpClient.get<CarroDto[]>(this.url).pipe(
      map((carros) => carros)
    );
  }

  salvarCarro(carro: CarroDto): Observable<CarroDto> {
    return this.httpClient.post<CarroDto>(this.url + '/add', carro).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  editarCarro(carro: CarroDto): Observable<CarroDto> {
    return this.httpClient.put<CarroDto>(this.url + '/edit', carro).pipe(
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

  buscarCarroPorId(id: number): Observable<CarroDto> {
    return this.httpClient.get<CarroDto>(this.url + '/' + id).pipe(
      map((carro) => carro),
      catchError( (e) => this.errorHandler(e))
    );
  }

  deletarCarro(carro: CarroDto): Observable<CarroDto> {
    debugger
    const teste = this.httpClient.post<CarroDto>(this.url + '/delete', carro).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );

    return teste
  }
}

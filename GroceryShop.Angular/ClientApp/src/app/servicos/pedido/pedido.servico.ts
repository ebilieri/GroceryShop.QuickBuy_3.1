import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../../modelo/pedido';

@Injectable({
  providedIn: 'root'
})

export class PedidoServico implements OnInit {

  private baseURL: string;

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    // recuperar o endereço raiz do site
    this.baseURL = baseUrl;
  }

  ngOnInit(): void {
   
  }

  // metodo para salvar pedido na base de dados
  public efetivarCompra(pedido: Pedido): Observable<number> {
    //console.log(JSON.stringify(pedido));
    return this.http.post<number>(this.baseURL + 'api/pedido', JSON.stringify(pedido), { headers: this.headers });
  }

}

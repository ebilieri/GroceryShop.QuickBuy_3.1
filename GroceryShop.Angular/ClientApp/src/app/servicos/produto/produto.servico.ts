import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../../modelo/produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutoServico implements OnInit {

  private baseURL: string;
  public produtos: Produto[];

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    // recuperar o endereço raiz do site
    this.baseURL = baseUrl;
  }

  ngOnInit(): void {
    this.produtos = [];
  }

  public cadastrar(produto: Produto): Observable<Produto> {

    return this.http.post<Produto>(this.baseURL + 'api/produto', JSON.stringify(produto), { headers: this.headers });
  }

  //public salvar(produto: Produto): Observable<Produto> {

  //  return this.http.put<Produto>(this.baseURL + 'api/produto', JSON.stringify(produto), { headers: this.headers });
  //}

  public deletar(produtoId: number): Observable<Produto[]> {

    return this.http.delete<Produto[]>(this.baseURL + 'api/produto/' + produtoId, { headers: this.headers });
  }

  public obterTodosProdutos(): Observable<Produto[]> {

    return this.http.get<Produto[]>(this.baseURL + 'api/produto');
  }

  public obterProduto(produtoId: number): Observable<Produto> {

    return this.http.get<Produto>(this.baseURL + 'api/produto/' + produtoId);
  }

  public enviarArquivo(arquivoSelecionado: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('arquivoEnviado', arquivoSelecionado, arquivoSelecionado.name);
    return this.http.post<string>(this.baseURL + 'api/produto/enviarArquivo', formData);
  }
}

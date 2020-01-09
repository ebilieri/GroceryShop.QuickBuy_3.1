import { Component, OnInit } from '@angular/core'
import { Produto } from '../../modelo/produto';
import { ProdutoServico } from '../../servicos/produto/produto.servico';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.pesquisa.component.html',
  styleUrls: ['./loja.pesquisa.component.css']
})

export class LojaPesquisaComponent implements OnInit {
  public produtos: Produto[];

  ngOnInit(): void {

  }

  constructor(private produtoServico: ProdutoServico, private router: Router, private toast: ToastrService) {
    // carregar produtos ao iniciar
    this.carregarProdutos();
  }

  private carregarProdutos() {
    this.produtoServico.obterTodosProdutos()
      .subscribe(dataResult => {
        this.produtos = dataResult;
      }, erro => {
          console.log(erro.error);
          this.toast.error(erro.error, "Erro!");
      });
    
  }

  public abrirProduto(produto: Produto) {
    sessionStorage.setItem('produtoDetalhe', JSON.stringify(produto));
    this.router.navigate(['/loja-produto']);
  }
}

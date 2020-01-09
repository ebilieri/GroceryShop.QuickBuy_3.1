import { Component, OnInit } from '@angular/core';
import { Produto } from '../../modelo/produto';
import { ProdutoServico } from '../../servicos/produto/produto.servico';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'pesquisa-produto',
  templateUrl: './pesquisa.produto.component.html',
  styleUrls: ['./pesquisa.produto.component.css']
})

export class PesquisaProdutoComponent implements OnInit {

  public produtos: Produto[];

  ngOnInit(): void {
    sessionStorage.setItem('produtoSessao', '');
  }

  constructor(private produtoServico: ProdutoServico, private router: Router, private toast: ToastrService) {
    // carregar produtos ao iniciar
    this.carregarProdutos();
  }


  private carregarProdutos() {
    this.produtoServico.obterTodosProdutos()
      .subscribe(produtos_data => {
        this.produtos = produtos_data;
      }, erro => {
          console.log(erro.error);
          this.toast.error(erro.error, "Erro!");
      });
  }

  public adicionarProduto() {
    this.router.navigate(['/produto']);
  }

  public deletarProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente excluir o produto selecionado?");
    if (retorno == true) {
      this.produtoServico.deletar(produto.id).subscribe(
        dataResult => {
          this.produtos = dataResult;
          this.toast.success("Produto removido com sucesso", "Sucesso!");
        },
        erro => {
          console.log(erro.error);
          this.toast.error(erro.error, "Erro!");
        });
    }
  }

  public editarProduto(produto: Produto) {
    sessionStorage.setItem('produtoSessao', JSON.stringify(produto));
    this.router.navigate(['/produto']);
  }
}

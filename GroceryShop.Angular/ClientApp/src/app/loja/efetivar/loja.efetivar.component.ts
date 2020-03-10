import { Component, OnInit } from '@angular/core';
import { LojaCarrinhoCompras } from '../carrinho-compras/loja.carrinho.compras';
import { Produto } from '../../modelo/produto';
import { Router } from '@angular/router';
import { Pedido } from '../../modelo/pedido';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';
import { ItemPedido } from '../../modelo/itemPedido';
import { PedidoServico } from '../../servicos/pedido/pedido.servico';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'loja-efetivar',
  templateUrl: './loja.efetivar.component.html',
  styleUrls: ['./loja.efetivar.component.css']
})

export class LojaEfetivarComponent implements OnInit {
  public carrinhoCompras: LojaCarrinhoCompras;
  public produtos: Produto[];
  public total: number;

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();
  }


  constructor(private usuarioServico: UsuarioServico, private pedidoServico: PedidoServico,
    private router: Router, private toast: ToastrService) {

  }

  public atualizarPreco(produto: Produto, quantidade: number) {
    if (!produto.precoOriginal)
      produto.precoOriginal = produto.preco;

    if (quantidade <= 0) {
      quantidade = 1
      produto.quantidade = quantidade;
    }

    produto.preco = produto.precoOriginal * quantidade;
    this.carrinhoCompras.atualizar(this.produtos);

    this.atualizarTotal();
  }

  public remover(produto: Produto) {
    this.carrinhoCompras.removerProduto(produto);
    this.produtos = this.carrinhoCompras.obterProdutos();

    this.atualizarTotal();
  }

  public atualizarTotal() {
    this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
    if (!this.carrinhoCompras.temItensCarrinhoCompras())
      this.router.navigate(['/']);
  }

  public efetivarCompra() {
    this.pedidoServico.efetivarCompra(this.criarPedido())
      .subscribe(
        pedidoId => {
          console.log(pedidoId);
          sessionStorage.setItem("pedidoId", pedidoId.toString());
          this.produtos = [];
          this.carrinhoCompras.limparCarrinhoComprar();
          // redirecionar pagina id pedidos
          this.router.navigate(['/compra-finalizada-sucesso']);
        },
        erro => {
          console.log(erro.error);
          this.toast.error(erro.error, "Erro!");
        }
      );
  }

  public criarPedido(): Pedido {
    let pedido = new Pedido();
    // Usuario
    pedido.usuarioId = this.usuarioServico.usuario.id;

    // Endereço
    pedido.cep = "12345-789";
    pedido.cidade = "São Paulo";
    pedido.estado = "SP";
    pedido.enderecoCompleto = "Rua Central";
    pedido.numeroEndereco = "112";
    pedido.dataPedido = new Date();
    pedido.dataPrevisaoEntrega = new Date();

    // forma de pagamento
    pedido.formaPagamentoId = 2;

    this.produtos = this.carrinhoCompras.obterProdutos();

    for (let produto of this.produtos) {
      let itemPedido = new ItemPedido();

      itemPedido.produtoId = produto.id;
      
      if (!produto.quantidade)
        produto.quantidade = 1;
      itemPedido.quantidade = produto.quantidade;

      // adicionar itens pedido
      pedido.itensPedidos.push(itemPedido);
    }
    
    return pedido;
  }

}

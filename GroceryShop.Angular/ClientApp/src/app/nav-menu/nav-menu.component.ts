import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';
import { LojaCarrinhoCompras } from '../loja/carrinho-compras/loja.carrinho.compras';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  public carrinhosCompras: LojaCarrinhoCompras;

  get usuario() {
    return this.usuarioServico.usuario;
  }


  ngOnInit(): void {
    this.carrinhosCompras = new LojaCarrinhoCompras();
  }

  constructor(private router: Router, private usuarioServico: UsuarioServico) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  // Verificae se o usuario está autenticado
  public usuarioAutenticado(): boolean {
    return this.usuarioServico.usuarioAutenticado();
  }

  public usuarioAdministrador(): boolean {
    return this.usuarioServico.usuarioAdministrador();
  }

  sair() {
    this.usuarioServico.limparSessao();
    this.router.navigate(['/']);
  }

  public temItensCarrinhoCompras(): boolean {
    return this.carrinhosCompras.temItensCarrinhoCompras();
  }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';

@Injectable({
  providedIn: 'root'
})

export class GuardaRotas implements CanActivate {

  constructor(private router: Router, private usuarioServico: UsuarioServico) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.usuarioServico.usuario;
    if (this.usuarioServico.usuarioAutenticado()) {
      // se usuario autenticado
      return true;
    }
    // retorna a url que o usuario esta acessando
    this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });

    return false;
  }

}

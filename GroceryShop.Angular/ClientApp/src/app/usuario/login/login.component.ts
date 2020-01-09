import { Component, OnInit } from '@angular/core'
import { Usuario } from '../../modelo/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public usuario;
  public returnUrl: string;
  public mensagem: string;
  public ativar_spinner: boolean;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {

  }

  /*
   *Ciclo de vida de um componente
   * https://medium.com/xp-inc/angular-ngoninit-e-constructor-be52ad5ba599
   */
  ngOnInit(): void {
    this.usuario = new Usuario();
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
  }

  // Efetuar login no sistema
  entrar(): void {
    this.ativar_spinner = true;
    // chamar servico/api para validar usuario e senha
    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        data_json => {
          // execução com sucesso
          this.usuarioServico.usuario = data_json;
          
          // redirecionar para home ou pagina acessada
          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          } else {
            this.router.navigate([this.returnUrl]);
          }

          console.log(data_json);
        },
        erro => {
          // erro-falha ao executar operação
          this.mensagem = erro.error;
          console.log(erro.error);
          this.ativar_spinner = false;
        }
      );
  }
}

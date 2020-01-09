import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';

@Component({
  selector: 'cadastro-usuario',
  templateUrl: './cadastro.usuario.component.html',
  styleUrls: ['./cadastro.usuario.component.css']
})

export class CadastroUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public ativar_spinner: boolean;
  public mensagem: string[];
  public usuarioCadastrado: boolean;

  constructor(private usuarioServico: UsuarioServico) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrarUsuario() {
    this.ativar_spinner = true;
    this.usuarioServico.cadastrarUsuario(this.usuario)
      .subscribe(
        data_json => {
          this.usuarioCadastrado = true;
          this.mensagem = null; // limpar mensagem
          this.ativar_spinner = false;
        },
        erro => {
          //this.usuarioCadastrado = true;
          this.mensagem = erro.error;
          this.ativar_spinner = false;
        }
      );
  }
}

import { Component, OnInit } from '@angular/core'
import { Produto } from '../modelo/produto';
import { ProdutoServico } from '../servicos/produto/produto.servico';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
  public produto: Produto;
  public arquivoSelecionado: File;
  public ativar_spinner;
  public mensagem: string[];

  constructor(private produtoServico: ProdutoServico, private router: Router, private toast: ToastrService) {

  }

  ngOnInit(): void {
    var produtoSessao = sessionStorage.getItem('produtoSessao');
    
    if (produtoSessao) {
      this.produto = JSON.parse(produtoSessao);
    } else {
      this.produto = new Produto();
    }
  }

  // fazer upload imagem produto
  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.ativarSpinner();

    // chamar serviço enviar arquivo
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          this.desativarSpinner();
          //alert(this.produto.nomeArquivo);
          console.log(nomeArquivo);
        },
        erro => {
          this.desativarSpinner();
          console.log(erro.error);
        }
      );
  }

  public cadastrar() {
    this.ativarSpinner();
    // chama serviço que cadastra produto
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        data_json => {
          this.desativarSpinner();
          console.log(data_json);
          sessionStorage.setItem('produtoSessao', '');
          this.router.navigate(['/pesquisar-produto']);
          this.toast.success("Produto salvo com sucesso", "Sucesso!");
        },
        erro => {
          this.desativarSpinner();
          this.mensagem = erro.error;
          console.log(erro.error);
        });
  }

  public ativarSpinner() {
    this.ativar_spinner = true;
  }

  public desativarSpinner() {
    this.ativar_spinner = false;
  }

}

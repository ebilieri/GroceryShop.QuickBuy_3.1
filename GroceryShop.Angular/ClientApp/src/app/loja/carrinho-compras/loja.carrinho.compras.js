"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LojaCarrinhoCompras = /** @class */ (function () {
    function LojaCarrinhoCompras() {
        this.produtos = [];
    }
    LojaCarrinhoCompras.prototype.adicionar = function (produto) {
        var produtosLocalStorage = localStorage.getItem("produtosLocalStorage");
        if (!produtosLocalStorage) {
            // se não existir nada dentro do localStorage
            this.produtos.push(produto);
        }
        else {
            // se ja existir pelo menos um item armazenado na sessao(produtosLocalStorage)      
            this.produtos = JSON.parse(produtosLocalStorage);
            //retornar todos os produtos diferentes do atual
            //var exist = this.produtos.filter(p=> p.id == produto.id);
            //alert(exist);
            this.produtos.push(produto);
        }
        localStorage.setItem("produtosLocalStorage", JSON.stringify(this.produtos));
    };
    LojaCarrinhoCompras.prototype.obterProdutos = function () {
        var produtosLocalStorage = localStorage.getItem("produtosLocalStorage");
        if (produtosLocalStorage)
            return JSON.parse(produtosLocalStorage);
        return this.produtos;
    };
    LojaCarrinhoCompras.prototype.removerProduto = function (produto) {
        var produtosLocalStorage = localStorage.getItem("produtosLocalStorage");
        if (produtosLocalStorage) {
            // recuperar os dodos do local storage
            this.produtos = JSON.parse(produtosLocalStorage);
            //retornar todos os produtos diferentes do atual
            this.produtos = this.produtos.filter(function (p) { return p.id != produto.id; });
            // atualizar local storage
            localStorage.setItem("produtosLocalStorage", JSON.stringify(this.produtos));
        }
    };
    LojaCarrinhoCompras.prototype.atualizar = function (produtos) {
        localStorage.setItem("produtosLocalStorage", JSON.stringify(produtos));
    };
    LojaCarrinhoCompras.prototype.temItensCarrinhoCompras = function () {
        var itens = this.obterProdutos();
        return (itens.length > 0);
    };
    LojaCarrinhoCompras.prototype.limparCarrinhoComprar = function () {
        localStorage.setItem("produtosLocalStorage", "");
    };
    return LojaCarrinhoCompras;
}());
exports.LojaCarrinhoCompras = LojaCarrinhoCompras;
//# sourceMappingURL=loja.carrinho.compras.js.map
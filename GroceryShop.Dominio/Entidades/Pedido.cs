using GroceryShop.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GroceryShop.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }

        // Endereço
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int NumeroEndereco { get; set; }

        // Pagamento
        public int FormaPagamentoId { get; set; }
        public virtual FormaPagamento FormaPagamento { get; set; }
        
        /// <summary>
        /// Pedido deve ter um ou mais itens
        /// </summary>
        public virtual ICollection<ItemPedido> ItensPedidos { get; set; }

        public override void Validate()
        {
            LimparMensagemValidacao();

            if (!ItensPedidos.Any())
                AdicionarMensagem("Crítica - Pedido deve conter pelo menos 1 item");

            if (string.IsNullOrEmpty(CEP))
                AdicionarMensagem("CEP é de preenchimento obrigatório");

            if (FormaPagamentoId <= 0)
                AdicionarMensagem("Forma de pagamento não informada");

        }
    }
}

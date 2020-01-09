using System.Collections.Generic;
using System.Linq;

namespace GroceryShop.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagemValidacao { get; set; }

        private List<string> mensagemValidacao
        {
            get
            {
                return _mensagemValidacao ?? (_mensagemValidacao = new List<string>());
            }
        }

        // Metodos *****
        public abstract void Validate();

        protected void LimparMensagemValidacao()
        {
            mensagemValidacao.Clear();
        }

        protected void AdicionarMensagem(string mensagem)
        {
            mensagemValidacao.Add(mensagem);
        }

        public List<string> ObterMensageValidacao()
        {
            return mensagemValidacao;
        }

        public bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }
    }
}

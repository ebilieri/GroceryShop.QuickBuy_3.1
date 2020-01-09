using System.Collections.Generic;

namespace GroceryShop.Dominio.Entidades
{
    public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public bool EhAdministrador { get; set; }

        /// <summary>
        /// Usuario pode ter um ou mais pedidos
        /// </summary>
        public virtual ICollection<Pedido> Pedidos { get; set; }

        public override void Validate()
        {
            LimparMensagemValidacao();

            if (string.IsNullOrEmpty(Email))
                AdicionarMensagem("Email é de preenchimento obrigatório");

            if (string.IsNullOrEmpty(Senha))
                AdicionarMensagem("Senha é de preenchimento obrigatório");
        }
    }
  
}

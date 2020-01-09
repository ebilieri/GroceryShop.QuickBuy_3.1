namespace GroceryShop.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            LimparMensagemValidacao();

            if (string.IsNullOrEmpty(Nome))
                AdicionarMensagem("Nome é de preenchimento obrigatório");

            if (string.IsNullOrEmpty(Descricao))
                AdicionarMensagem("Descrição é de preenchimento obrigatório");

            if (Preco <= 0)
                AdicionarMensagem("Preço é de preenchimento obrigatório");          
        }
    }
}

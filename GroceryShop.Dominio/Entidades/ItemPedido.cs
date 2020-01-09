namespace GroceryShop.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int PedidoId { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            LimparMensagemValidacao();

            if (ProdutoId == 0)
                AdicionarMensagem("Informe o Produto");

            if (Quantidade <= 0)
                AdicionarMensagem("Quantidade não informada");
        }
    }
}

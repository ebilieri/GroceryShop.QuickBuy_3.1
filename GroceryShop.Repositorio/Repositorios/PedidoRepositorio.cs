using GroceryShop.Dominio.Contratos;
using GroceryShop.Dominio.Entidades;
using GroceryShop.Repositorio.Contexto;

namespace GroceryShop.Repositorio.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }
    }
}

using GroceryShop.Dominio.Contratos;
using GroceryShop.Dominio.Entidades;
using GroceryShop.Repositorio.Contexto;

namespace GroceryShop.Repositorio.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio
    {
        public ProdutoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }
    }
}

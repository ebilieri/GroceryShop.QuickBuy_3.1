using GroceryShop.Dominio.Entidades;

namespace GroceryShop.Dominio.Contratos
{
    public interface IUsuarioRepositorio : IBaseRepositorio<Usuario>
    {
        Usuario Obter(string email);
        Usuario Obter(string email, string senha);
        
    }
}

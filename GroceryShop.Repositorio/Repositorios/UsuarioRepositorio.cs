using GroceryShop.Dominio.Contratos;
using GroceryShop.Dominio.Entidades;
using GroceryShop.Repositorio.Contexto;
using System.Linq;

namespace GroceryShop.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }


        public Usuario Obter(string email)
        {
            return QuickBuyContexto.Usuarios.FirstOrDefault(u => u.Email == email);
        }

        public Usuario Obter(string email, string senha)
        {
            return QuickBuyContexto.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }


    }
}

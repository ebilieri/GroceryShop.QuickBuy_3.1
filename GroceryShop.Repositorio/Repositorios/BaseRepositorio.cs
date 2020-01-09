using GroceryShop.Dominio.Contratos;
using GroceryShop.Repositorio.Contexto;
using System.Collections.Generic;
using System.Linq;

namespace GroceryShop.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {
        protected readonly QuickBuyContexto QuickBuyContexto;

        public BaseRepositorio(QuickBuyContexto quickBuyContexto)
        {
            QuickBuyContexto = quickBuyContexto;
        }

        public void Adicionar(TEntity entity)
        {
            QuickBuyContexto.Set<TEntity>().Add(entity);
            QuickBuyContexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            QuickBuyContexto.Set<TEntity>().Update(entity);
            QuickBuyContexto.SaveChanges();
        }
        
        public TEntity ObterPorId(int id)
        {
            return QuickBuyContexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return QuickBuyContexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            QuickBuyContexto.Set<TEntity>().Remove(entity);
            QuickBuyContexto.SaveChanges();
        }

        public void Dispose()
        {
            QuickBuyContexto.Dispose();
        }
    }
}

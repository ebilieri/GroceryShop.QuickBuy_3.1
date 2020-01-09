using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using GroceryShop.Dominio.Entidades;
using GroceryShop.Dominio.ObjetoDeValor;
using System;

namespace GroceryShop.Repositorio.Config
{
    public class FormaConfiguration : IEntityTypeConfiguration<FormaPagamento>
    {
        public void Configure(EntityTypeBuilder<FormaPagamento> builder)
        {
            builder.HasKey(u => u.Id);

            builder.Property(u => u.Nome).IsRequired().HasMaxLength(50);

            builder.Property(u => u.Descricao).IsRequired().HasMaxLength(100);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using GroceryShop.Dominio.Entidades;
using System;

namespace GroceryShop.Repositorio.Config
{
    public class ProdutoConfiguration : IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {
            builder.HasKey(u => u.Id);

            builder.Property(u => u.Nome).IsRequired().HasMaxLength(100);

            builder.Property(u => u.Descricao).IsRequired();

            builder.Property(u => u.Preco).HasColumnType("decimal(18,2)").IsRequired();

            builder.Property(u => u.NomeArquivo).HasMaxLength(2500);
        }
    }
}

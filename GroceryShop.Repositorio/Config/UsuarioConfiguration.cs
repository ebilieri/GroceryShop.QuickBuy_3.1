using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using GroceryShop.Dominio.Entidades;
using System;

namespace GroceryShop.Repositorio.Config
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(u => u.Id);

            builder.Property(u => u.Email).IsRequired().HasMaxLength(100);

            builder.Property(u => u.Nome).IsRequired().HasMaxLength(50);

            builder.Property(u => u.SobreNome).IsRequired().HasMaxLength(100);

            builder.Property(u => u.Senha).IsRequired().HasMaxLength(400);

            // Mapeamento Relacionamento Usuario - Pedidos
            builder.HasMany(u => u.Pedidos)
                .WithOne(p => p.Usuario);
        }
    }
}

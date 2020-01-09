using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using GroceryShop.Dominio.Entidades;
using System;

namespace GroceryShop.Repositorio.Config
{
    public class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {
            builder.HasKey(u => u.Id);

            builder.Property(u => u.DataPedido).IsRequired();

            builder.Property(u => u.CEP).IsRequired().HasMaxLength(20);

            builder.Property(u => u.Estado).IsRequired().HasMaxLength(50);

            builder.Property(u => u.Cidade).IsRequired().HasMaxLength(100);

            builder.Property(u => u.EnderecoCompleto).IsRequired().HasMaxLength(200);

            // Mapeamento Relacionamento Forma de Pagamento ( um para um)
            builder.HasOne(u => u.FormaPagamento);
        }
    }
}

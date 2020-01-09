using Microsoft.EntityFrameworkCore.Migrations;

namespace GroceryShop.Repositorio.Migrations
{
    public partial class CorrecaoCampoNoArquivoProduto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NomeAquivo",
                table: "Produtos",
                newName: "NomeArquivo");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NomeArquivo",
                table: "Produtos",
                newName: "NomeAquivo");
        }
    }
}

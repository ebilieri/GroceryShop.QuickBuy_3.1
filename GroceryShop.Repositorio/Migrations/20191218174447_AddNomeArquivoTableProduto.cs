using Microsoft.EntityFrameworkCore.Migrations;

namespace GroceryShop.Repositorio.Migrations
{
    public partial class AddNomeArquivoTableProduto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NomeAquivo",
                table: "Produtos",
                maxLength: 2500,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomeAquivo",
                table: "Produtos");
        }
    }
}

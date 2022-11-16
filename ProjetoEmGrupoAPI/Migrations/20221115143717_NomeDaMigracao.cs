using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoEmGrupoAPI.Migrations
{
    public partial class NomeDaMigracao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_baseEmprestimos_baseClientes_clienteEmprestadorid",
                table: "baseEmprestimos");

            migrationBuilder.DropForeignKey(
                name: "FK_baseEmprestimos_baseLivros_livroEmprestadoid",
                table: "baseEmprestimos");

            migrationBuilder.DropIndex(
                name: "IX_baseEmprestimos_clienteEmprestadorid",
                table: "baseEmprestimos");

            migrationBuilder.DropIndex(
                name: "IX_baseEmprestimos_livroEmprestadoid",
                table: "baseEmprestimos");

            migrationBuilder.RenameColumn(
                name: "livroEmprestadoid",
                table: "baseEmprestimos",
                newName: "idLivro");

            migrationBuilder.RenameColumn(
                name: "clienteEmprestadorid",
                table: "baseEmprestimos",
                newName: "idCliente");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "idLivro",
                table: "baseEmprestimos",
                newName: "livroEmprestadoid");

            migrationBuilder.RenameColumn(
                name: "idCliente",
                table: "baseEmprestimos",
                newName: "clienteEmprestadorid");

            migrationBuilder.CreateIndex(
                name: "IX_baseEmprestimos_clienteEmprestadorid",
                table: "baseEmprestimos",
                column: "clienteEmprestadorid");

            migrationBuilder.CreateIndex(
                name: "IX_baseEmprestimos_livroEmprestadoid",
                table: "baseEmprestimos",
                column: "livroEmprestadoid");

            migrationBuilder.AddForeignKey(
                name: "FK_baseEmprestimos_baseClientes_clienteEmprestadorid",
                table: "baseEmprestimos",
                column: "clienteEmprestadorid",
                principalTable: "baseClientes",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_baseEmprestimos_baseLivros_livroEmprestadoid",
                table: "baseEmprestimos",
                column: "livroEmprestadoid",
                principalTable: "baseLivros",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

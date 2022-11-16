using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoEmGrupoAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "baseClientes",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nomeCliente = table.Column<string>(type: "TEXT", nullable: true),
                    emailCliente = table.Column<string>(type: "TEXT", nullable: true),
                    telefone1 = table.Column<string>(type: "TEXT", nullable: true),
                    telefone2 = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_baseClientes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "baseLivros",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nomeLivro = table.Column<string>(type: "TEXT", nullable: true),
                    autor = table.Column<string>(type: "TEXT", nullable: true),
                    quantPaginas = table.Column<int>(type: "INTEGER", nullable: false),
                    editora = table.Column<string>(type: "TEXT", nullable: true),
                    edicao = table.Column<string>(type: "TEXT", nullable: true),
                    status = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_baseLivros", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "baseEmprestimos",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    clienteEmprestadorid = table.Column<int>(type: "INTEGER", nullable: false),
                    livroEmprestadoid = table.Column<int>(type: "INTEGER", nullable: false),
                    dataEmprestimo = table.Column<DateTime>(type: "TEXT", nullable: false),
                    dataDevolucao = table.Column<DateTime>(type: "TEXT", nullable: false),
                    status = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_baseEmprestimos", x => x.id);
                    table.ForeignKey(
                        name: "FK_baseEmprestimos_baseClientes_clienteEmprestadorid",
                        column: x => x.clienteEmprestadorid,
                        principalTable: "baseClientes",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_baseEmprestimos_baseLivros_livroEmprestadoid",
                        column: x => x.livroEmprestadoid,
                        principalTable: "baseLivros",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_baseEmprestimos_clienteEmprestadorid",
                table: "baseEmprestimos",
                column: "clienteEmprestadorid");

            migrationBuilder.CreateIndex(
                name: "IX_baseEmprestimos_livroEmprestadoid",
                table: "baseEmprestimos",
                column: "livroEmprestadoid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "baseEmprestimos");

            migrationBuilder.DropTable(
                name: "baseClientes");

            migrationBuilder.DropTable(
                name: "baseLivros");
        }
    }
}

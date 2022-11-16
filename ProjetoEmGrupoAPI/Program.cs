using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Trabalho {

    class Program {
        static void Main(string[] args) {

            var builder = WebApplication.CreateBuilder(args);
			
			var connectionString = builder.Configuration.GetConnectionString("Livraria") ?? "Data Source=Livraria.db";
			builder.Services.AddSqlite<DatabaseSets>(connectionString);

            builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
			
			var app = builder.Build();

            app.UseCors();

            //listar todos os empréstimos
            app.MapGet("/emprestimos", (DatabaseSets dbEmprestimos) => {
                return dbEmprestimos.baseEmprestimos.ToList();
            });

            //listar um empréstimo específico
            app.MapGet("/emprestimos/{id}", (DatabaseSets dbEmprestimos, int idEmprestimo) =>{
                return dbEmprestimos.baseEmprestimos.Find(idEmprestimo);
            });

            //cadastrarEmprestimo
            app.MapPost("/cadastrarEmprestimo"
                        //+ "{idEmprestimo}/" 
                        //+ "{idCliente}/{idLivro}"
                        , (DatabaseSets dbEmprestimos, 
                        //int idEmprestimo,
                        //int idCliente, int idLivro
                        Emprestimos emprestimo) => {

                            
				var cliente = dbEmprestimos.baseClientes.Find(emprestimo.idCliente);
                if (cliente == null) {
                    return "Cliente não encontrado";
                }
				var livro = dbEmprestimos.baseLivros.Find(emprestimo.idLivro);
                if (livro == null) {
                    return "Livro não encontrado";
                } else if (livro.status == 2) {
                    return "Livro já emprestado!";
                }

				//var idEmprestimoJaExistente = dbEmprestimos.baseEmprestimos.Find(idEmprestimo);

				//if (idEmprestimoJaExistente == null) {

					Emprestimos novoEmprestimo = new Emprestimos(cliente.id, livro.id, DateTime.Now, 1);
                    //Emprestimos emprestimo = new Emprestimos(idEmprestimo, cliente, livro, DateTime.Now, 1);
                    //emprestimo.id = idEmprestimo;
					//emprestimo.idCliente = cliente.id;
					//emprestimo.idLivro = livro.id;
					//emprestimo.dataEmprestimo = DateTime.Now;
					//emprestimo.dataDevolucao = emprestimo.dataEmprestimo.AddDays(15);
					//emprestimo.status = 1;

                    livro.status = 2;

					dbEmprestimos.baseEmprestimos.Add(novoEmprestimo);
					dbEmprestimos.SaveChanges();

					return "Empréstimo cadastrado com sucesso!";

				/*} else {

					return "Já existe um empréstimo com esse ID!";

				}*/

            });

            /*
            //Atualizar empréstimo, quando um cliente resolveu emprestar outro livro mas o empréstimo já foi cadastrado (cabe regra onde não pode alterar um empréstimo, 
            //nesse caso deveria encerrar o empréstimo atual e realizar um novo)
            app.MapPost("/atualizarLivroEmprestimo/{id}", (DatabaseSets dbEmprestimos, int idEmprestimo, int idLivroAtualizado) => {
                var emprestimo = dbEmprestimos.listEmprestimo.Find(idEmprestimo);
                if (emprestimo != null) {
                    emprestimo.idLivroEmprestado = idLivroAtualizado;
                    dbEmprestimos.SaveChanges();
                    return "Empréstimo atualizado com sucesso!";
                } else {
                    return "Não foi possível localizar esse empréstimo";
                }
            });
            */

            //Deletar empréstimo
            app.MapDelete("/deletarEmprestimo/{id}", (DatabaseSets dbEmprestimos, int id) => {

                var emprestimo = dbEmprestimos.baseEmprestimos.Find(id);
                if (emprestimo != null) {
                    emprestimo.status = 3;
                    //dbEmprestimos.Remove(emprestimo);
                    dbEmprestimos.SaveChanges();
                    return "Empréstimo deletado com sucesso!";
                } else {
                    return "Não foi possível encontrar esse empréstimo";
                }

            });

            app.MapPut("/renovarEmprestimo/{id}", (DatabaseSets dbEmprestimos, int id) => {
                var emprestimo = dbEmprestimos.baseEmprestimos.Find(id);
                if (emprestimo != null) {
                    emprestimo.dataDevolucao = emprestimo.dataDevolucao.AddDays(15);

                    return "Empréstimo renovado com sucesso!";
                } else {
                    return "Não foi possível encontrar esse empréstimo";
                }
            });

            app.MapPut("/devolverEmprestimo/{id}", (DatabaseSets dbEmprestimos, int id) => {
                var emprestimo = dbEmprestimos.baseEmprestimos.Find(id);
                if (emprestimo != null) {
                    emprestimo.status = 2;
                    dbEmprestimos.SaveChanges();

                    return "Empréstimo devolvido com sucesso!";
                } else {
                    return "Não foi possível encontrar esse empréstimo";
                }
            });

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			//listar todos os clientes cadastrados
			app.MapGet("/clientes", (DatabaseSets listClientes) => {
				return listClientes.baseClientes.ToList();
			});
			
			//listar cliente especifico (por id)
			app.MapGet("/clientes/{id}", (DatabaseSets listClientes, int id) => {
				return listClientes.baseClientes.Find(id);
			});
			
			//cadastrar cliente
			app.MapPost("/cadastrarClientes", (DatabaseSets listClientes, Clientes cliente) =>
			{
				listClientes.baseClientes.Add(cliente);
				listClientes.SaveChanges();
				return "Cliente adicionado";
			});

			//atualizar cliente
			app.MapPut("/atualizarClientes/{id}", (DatabaseSets listClientes, Clientes clienteAtualizado, int id) =>
			{
				var cliente = listClientes.baseClientes.Find(id);
                cliente.nomeCliente = clienteAtualizado.nomeCliente;
                cliente.emailCliente = clienteAtualizado.emailCliente;
                cliente.telefone1 = clienteAtualizado.telefone1;
                cliente.telefone2 = clienteAtualizado.telefone2;
				listClientes.SaveChanges();
				return "Cliente atualizado";
			});
						
			//deletar cliente
			app.MapDelete("/deletarCliente/{id}", (DatabaseSets listClientes, int id) =>
			{
				var usuario = listClientes.baseClientes.Find(id);
				listClientes.Remove(usuario);
				listClientes.SaveChanges();
				return "Cliente atualizado";
			});

            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
						
			//listar todos os livros cadastrados
			app.MapGet("/livros", (DatabaseSets listLivros) => {
				return listLivros.baseLivros.ToList();
			});
			
			//listar livros especifico (por id)
			app.MapGet("/livros/{id}", (DatabaseSets listLivros, int id) => {
				return listLivros.baseLivros.Find(id);
			});
			
			//cadastrar livro
			app.MapPost("/cadastrarLivros", (DatabaseSets listLivros, Livros livro) =>
			{
				listLivros.baseLivros.Add(livro);
				listLivros.SaveChanges();
				return "Livro adicionado";
			});

			//atualizar livro
			app.MapPut("/atualizarLivros/{id}", (DatabaseSets listLivros, Livros livroAtualizado, int id) =>
			{
				var livro = listLivros.baseLivros.Find(id);
                livro.nomeLivro = livroAtualizado.nomeLivro;
                livro.autor = livroAtualizado.autor;
                livro.quantPaginas = livroAtualizado.quantPaginas;
                livro.editora = livroAtualizado.editora;
                livro.edicao = livroAtualizado.edicao;
                livro.status = livroAtualizado.status;
				listLivros.SaveChanges();
				return "Livro atualizado";
			});
						
			//deletar livro
			app.MapDelete("/deletarLivro/{id}", (DatabaseSets listLivros, int id) =>
			{
				var livro = listLivros.baseLivros.Find(id);
				listLivros.Remove(livro);
				listLivros.SaveChanges();
				return "Livro atualizado";
			});

            app.Run("http://localhost:3000");

        }
    }

}
//RODAR ESSES COMANDOS NA PRIMEIRA VEZ
//dotnet new webapi -minimal -o NomeDoProjeto
//cd NomeDoProjeto
//dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 6.0
//dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0
//dotnet tool install --global dotnet-ef
//dotnet ef migrations add InitialCreate

//RODAR ESSE COMANDO SEMPRE QUE MEXER NAS CLASSES RELATIVAS A BASE DE DADOS
//dotnet ef database update

//INCLUIR ESSE NAMESPACE
using Microsoft.EntityFrameworkCore;

using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace Trabalho
{
	class Usuario
    {
    	public int id { get; set; }
		public string? nome { get; set; }
    	public string? email { get; set; }
    }
	
	/*class BaseUsuarios : DbContext
	{
		public BaseUsuarios(DbContextOptions options) : base(options)
		{
		}
		
		public DbSet<Usuario> Usuarios { get; set; } = null!;
	}*/
	
	/*class Program
	{
		static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);
			
			var connectionString = builder.Configuration.GetConnectionString("Usuarios") ?? "Data Source=Usuarios.db";
			builder.Services.AddSqlite<BaseUsuarios>(connectionString);
			
			var app = builder.Build();
			
			//listar todos os usuarios
			app.MapGet("/usuarios", (BaseUsuarios baseUsuarios) => {
				return baseUsuarios.Usuarios.ToList();
			});
			
			//listar usuario especifico (por email)
			app.MapGet("/usuario/{id}", (BaseUsuarios baseUsuarios, int id) => {
				return baseUsuarios.Usuarios.Find(id);
			});
			
			//cadastrar usuario
			app.MapPost("/cadastrar", (BaseUsuarios baseUsuarios, Usuario usuario) =>
			{
				baseUsuarios.Usuarios.Add(usuario);
				baseUsuarios.SaveChanges();
				return "usuario adicionado";
			});
			
			//atualizar usuario
			app.MapPost("/atualizar/{id}", (BaseUsuarios baseUsuarios, Usuario usuarioAtualizado, int id) =>
			{
				var usuario = baseUsuarios.Usuarios.Find(id);
				usuario.nome = usuarioAtualizado.nome;
				usuario.email = usuarioAtualizado.email;
				baseUsuarios.SaveChanges();
				return "usuario atualizado";
			});
						
			//deletar usuario
			app.MapPost("/deletar/{id}", (BaseUsuarios baseUsuarios, int id) =>
			{
				var usuario = baseUsuarios.Usuarios.Find(id);
				baseUsuarios.Remove(usuario);
				baseUsuarios.SaveChanges();
				return "usuario atualizado";
			});
						
			app.Run();
		}
	}*/
}
using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Trabalho {

    class DatabaseSets : DbContext {

        public DatabaseSets(DbContextOptions options) : base(options) {

        }
        public DbSet<Emprestimos> baseEmprestimos {get; set;} = null;
        public DbSet<Clientes> baseClientes {get; set;} = null;
        public DbSet<Livros> baseLivros {get; set;} = null;

    }

}
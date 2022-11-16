using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Trabalho {

    class Livros {

        public int id { get; set; }

        public string? nomeLivro { get; set; }

        public string? autor { get; set; }

        public int quantPaginas { get; set; }

        public string? editora { get; set; } 

        public string? edicao { get; set; } 

        public int status { get; set; }

        public Livros() {

        }

    }

}
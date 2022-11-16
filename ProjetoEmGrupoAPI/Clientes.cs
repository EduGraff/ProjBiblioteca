using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Trabalho {

    class Clientes {

        public int id { get; set; }

        public string? nomeCliente { get; set; }

        public string? emailCliente { get; set; }

        public string? telefone1 { get; set; }

        public string? telefone2 { get; set; }

        public Clientes() {
            
        }

    }

}
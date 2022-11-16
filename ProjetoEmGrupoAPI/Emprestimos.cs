using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Trabalho {

    class Emprestimos {

        public int id { get; set; }

        //public Clientes clienteEmprestador { get; set; }
        public int idCliente { get; set; }

        //public Livros livroEmprestado { get; set; }
        public int idLivro { get; set; }

        public DateTime dataEmprestimo { get; set; }

        public DateTime dataDevolucao { get; set; }

        public int status { get; set; }

        /*
        public Emprestimos(int id, Clientes clienteEmprestador, Livros livroEmprestado, DateTime dataEmprestimo, int status) {
           
            this.id = id;
            this.clienteEmprestador = clienteEmprestador;
            this.livroEmprestado = livroEmprestado;
            this.dataEmprestimo = dataEmprestimo;
            this.dataDevolucao = dataEmprestimo.AddDays(15);
            this.status = status;

        }*/
        public Emprestimos(int id, int idCliente, int idLivro, DateTime dataEmprestimo, int status) {
           
            this.id = id;
            this.idCliente = idCliente;
            this.idLivro = idLivro;
            this.dataEmprestimo = dataEmprestimo;
            this.dataDevolucao = dataEmprestimo.AddDays(15);
            this.status = status;

        }

        public Emprestimos(int idCliente, int idLivro, DateTime dataEmprestimo, int status) {
           
            this.idCliente = idCliente;
            this.idLivro = idLivro;
            this.dataEmprestimo = dataEmprestimo;
            this.dataDevolucao = dataEmprestimo.AddDays(15);
            this.status = status;

        }

         public Emprestimos() {
            
         }

    }

}
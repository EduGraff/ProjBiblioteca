﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Trabalho;

#nullable disable

namespace ProjetoEmGrupoAPI.Migrations
{
    [DbContext(typeof(DatabaseSets))]
    [Migration("20221009154035_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.0");

            modelBuilder.Entity("Trabalho.Clientes", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("emailCliente")
                        .HasColumnType("TEXT");

                    b.Property<string>("nomeCliente")
                        .HasColumnType("TEXT");

                    b.Property<string>("telefone1")
                        .HasColumnType("TEXT");

                    b.Property<string>("telefone2")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("baseClientes");
                });

            modelBuilder.Entity("Trabalho.Emprestimos", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("clienteEmprestadorid")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("dataDevolucao")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("dataEmprestimo")
                        .HasColumnType("TEXT");

                    b.Property<int>("livroEmprestadoid")
                        .HasColumnType("INTEGER");

                    b.Property<int>("status")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.HasIndex("clienteEmprestadorid");

                    b.HasIndex("livroEmprestadoid");

                    b.ToTable("baseEmprestimos");
                });

            modelBuilder.Entity("Trabalho.Livros", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("autor")
                        .HasColumnType("TEXT");

                    b.Property<string>("edicao")
                        .HasColumnType("TEXT");

                    b.Property<string>("editora")
                        .HasColumnType("TEXT");

                    b.Property<string>("nomeLivro")
                        .HasColumnType("TEXT");

                    b.Property<int>("quantPaginas")
                        .HasColumnType("INTEGER");

                    b.Property<int>("status")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.ToTable("baseLivros");
                });

            modelBuilder.Entity("Trabalho.Emprestimos", b =>
                {
                    b.HasOne("Trabalho.Clientes", "clienteEmprestador")
                        .WithMany()
                        .HasForeignKey("clienteEmprestadorid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Trabalho.Livros", "livroEmprestado")
                        .WithMany()
                        .HasForeignKey("livroEmprestadoid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("clienteEmprestador");

                    b.Navigation("livroEmprestado");
                });
#pragma warning restore 612, 618
        }
    }
}
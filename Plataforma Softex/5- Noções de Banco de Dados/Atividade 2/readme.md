# Repositório: BlogDB


## Descrição

Este repositório contém os arquivos relacionados à atividade de modelagem de dados e implementação de um banco de dados para um sistema de blogs.

## Arquivos

* **Esboço-Modelo-Conceitual.png:** Esboço do modelo conceitual do sistema de blogs.
* **Instruções Atividade.png:** Instruções para a atividade.
* **comandos de criacao.sql:** Arquivo SQL com os comandos para criar o banco de dados e as tabelas.
* **blogdb apos criacao.png:** Imagem do banco de dados após a criação.

## Modelo conceitual

O modelo conceitual do sistema de blogs é composto por três entidades:

* **Autor:** Representa um autor que escreveu um post. Possui os atributos nome, e-mail e ID.
* **Post:** Representa um post escrito por um autor. Possui os atributos título, conteúdo, data de publicação e ID do autor.
* **Comentário:** Representa um comentário escrito por um usuário sobre um post. Possui os atributos texto e data de publicação e ID do autor.

Existem dois relacionamentos entre essas entidades:

* **Escrito:** Um autor pode escrever vários posts. Um post pode ser escrito por apenas um autor.
* **Comentario:** Um comentário pode ser escrito por um usuário sobre um post. Um post pode ter vários comentários.

## Implementação

O banco de dados foi implementado usando a linguagem SQL. Os comandos para criar o banco de dados e as tabelas estão no arquivo `comandos de criacao.sql`.

A imagem `blogdb apos criacao.png` mostra o banco de dados após a criação. O banco de dados contém uma tabela para cada entidade do modelo conceitual.

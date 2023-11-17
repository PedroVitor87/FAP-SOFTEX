create database Produtos
use produtos
create table produtos(
	ProdutoID int not null auto_increment,
    Nome_produto varchar(40) not null,
    preco decimal(8,2) not null,
    estoque int not null,
    primary key(ProdutoID)
);
insert into produtos(nome_produto, preco, estoque) values ('Smartphone', 799.99, 20)
insert into produtos(nome_produto, preco, estoque) values ('Tablet', 349.99, 10)
insert into produtos(nome_produto, preco, estoque) values ('Fone de Ouvido', 49.99, 50)
select * from produtos
update produtos set estoque = 25, preco = 849.99 where ProdutoID = 1

update produtos set estoque = estoque - 5 where produtoid = 2
update produtos set estoque = estoque - 10 where produtoid = 4
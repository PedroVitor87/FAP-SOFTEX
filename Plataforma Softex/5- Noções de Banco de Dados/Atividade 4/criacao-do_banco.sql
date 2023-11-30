create database trabalho4_joyclass;
use trabalho4_joyclass;
create table usuario(
	id int not null auto_increment,
    nome varchar(40) not null ,
    primary key(id)
);
create table transacao(
	id int not null auto_increment,
    codigo int not null,
    data date not null,
    valor decimal(8,2) not null,
    usuario_id int not null,
    primary key(id),
    foreign key(usuario_id) references usuario(id)
);
create table categoria(
	id int not null auto_increment,
    nome varchar(20) not null,
    primary key(id)
);
create table produto(
	id int not null auto_increment,
    nome varchar(20) not null,
    codigo int not null,
    valor decimal(8,2) not null,
    categoria_id int not null,
    primary key(id),
    foreign key(categoria_id) references categoria(id)
);
create table transacao_produto(
	id int not null auto_increment,
    produto_id int not null,
    transacao_id int not null,
    primary key(id),
    foreign key(produto_id) references produto(id),
    foreign key(transacao_id) references transacao(id)
);

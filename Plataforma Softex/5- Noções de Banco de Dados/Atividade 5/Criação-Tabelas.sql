create database trabalho5_joyclass
use trabalho5_joyclass
create table autor(
	AutorID int auto_increment not null,
    Nome varchar(60) not null unique,
    Nacionalidade varchar(18) not null,
    primary key(AutorID)
);
create table Livros(
	LivroID int not null auto_increment,
    Titulo varchar(40) not null unique,
    AnoPublicacao int not null,
    AutorID int not null,
    primary key(LivroID),
    foreign key(AutorID) references autor(AutorID)
);
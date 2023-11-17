create database BlogDB
create table autor(
	AutorID int not null auto_increment,
    nome_autor varchar(50) not null,
    email varchar(60) not null,
    primary key(AutorID)
)
create table post(
	PostID int not null auto_increment,
    titulo varchar(40) not null,
    conteudo varchar(130) not null,
    data_publicacao date not null,
    AutorID_FK int not null,
    primary key(PostID),
    foreign key(AutorID_FK) references autor(AutorID)
)
create table comentario(
	ComentarioID int not null auto_increment,
    texto_comentario varchar(60) not null,
    data_comentario date not null,
    AutorID_FK int not null,
    primary key(ComentarioID),
    foreign key(AutorID_FK) references autor(AutorID)
)
create table comentario_has_post(
	ID int not null auto_increment,
    comentarioID_FK int not null,
    postID_FK int not null,
    primary key(ID),
    foreign key(comentarioID_FK) references comentario(comentarioID),
    foreign key(postID_FK) references post(PostID)
)
select * from autor
select * from comentario
select * from post
select * from comentario_has_post
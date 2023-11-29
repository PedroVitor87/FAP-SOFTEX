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

INSERT INTO autor(Nome, Nacionalidade) VALUES ("Machado de Assis", "Brasileiro");
INSERT INTO autor(Nome, Nacionalidade) VALUES ("Jorge Amado", "Brasileiro");
INSERT INTO autor(Nome, Nacionalidade) VALUES ("Carlos Drummond de Andrade", "Brasileiro");
INSERT INTO autor(Nome, Nacionalidade) VALUES ("Monteiro Lobato", "Brasileiro");
INSERT INTO autor(Nome, Nacionalidade) VALUES ("Pero Vaz de Caminha", "Português");
INSERT INTO autor(Nome, Nacionalidade) VALUES ("Luís de Camões", "Português");
select * from autor
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Dom Casmurro", 1889, 1);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Memórias Póstumas de Brás Cubas", 1881, 1);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Helena", 1876, 1);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("O Alienista", 1882, 1);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Memorial de Aires", 1908, 1);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Capitães de areia", 1937, 2);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Gabriela cravo e canela", 1958, 2);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Dona Flor e seus Dois Maridos", 1966, 2);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Jubiabá", 1935, 2);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("CACAU", 1933, 2);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("O picapau amarelo", 1939, 4);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Reinações de Narizinho", 1931, 4);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("O saci", 1921, 4);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Histórias de Tia Nastácia", 1937, 4);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Caçadas de Pedrinho", 1933, 4);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Memórias da Emília", 1936, 4);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Sentimento do Mundo", 1940, 3);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Brejo das almas", 1934, 3);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("O Gerente", 1945, 3);
INSERT INTO livros(Titulo, AnoPublicacao, AutorID) VALUES ("Os Lusíadas", 1572, 6);

SELECT Nome as Autor, Titulo as Livro
FROM autor
INNER JOIN livros ON autor.AutorID = livros.AutorID;

SELECT autor.Nome as Autor, livros.Titulo as Livro, livros.AnoPublicacao
FROM autor
INNER JOIN livros ON autor.AutorID = livros.AutorID;

SELECT autor.Nome as Autor, Titulo as Livro 
FROM autor
INNER JOIN livros ON autor.AutorID = livros.AutorID WHERE autor.nacionalidade = "Português"

SELECT autor.Nome as Autor, COUNT(livros.LivroID) as Quantidade_Livros
FROM autor
LEFT JOIN livros ON autor.AutorID = livros.AutorID
GROUP BY autor.Nome;
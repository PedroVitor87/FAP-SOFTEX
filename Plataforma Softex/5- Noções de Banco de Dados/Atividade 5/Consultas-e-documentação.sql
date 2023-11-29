-- Instrução 2: Lista os autores e seus respectivos livros
-- Retorna o nome do autor e o título do livro, utilizando INNER JOIN para combinar as informações das tabelas autor e livros.
SELECT Nome as Autor, Titulo as Livro
FROM autor
INNER JOIN livros ON autor.AutorID = livros.AutorID;

-- Instrução 3: Lista detalhes dos livros e seus autores correspondentes
-- Retorna o nome do autor, título do livro e ano de publicação, utilizando INNER JOIN para combinar as informações das tabelas autor e livros.
SELECT autor.Nome as Autor, livros.Titulo as Livro, livros.AnoPublicacao
FROM autor
INNER JOIN livros ON autor.AutorID = livros.AutorID;

-- Instrução 4: Lista os autores e seus livros, incluindo aqueles sem livros (LEFT JOIN)
-- Retorna o nome do autor e o título do livro, incluindo autores que não têm livros associados, utilizando LEFT JOIN.
SELECT autor.Nome as Autor, Titulo as Livro 
FROM autor
LEFT JOIN livros ON autor.AutorID = livros.AutorID;

-- Instrução 5: Lista autores e seus livros apenas para autores portugueses
-- Retorna o nome do autor e o título do livro apenas para autores com nacionalidade "Português", utilizando INNER JOIN e uma condição WHERE.
SELECT autor.Nome as Autor, Titulo as Livro 
FROM autor
INNER JOIN livros ON autor.AutorID = livros.AutorID WHERE autor.Nacionalidade = "Português";

-- Instrução 6: Conta quantos livros cada autor escreveu
-- Retorna o nome do autor e a quantidade de livros que cada autor escreveu, utilizando LEFT JOIN e a função COUNT com GROUP BY.
SELECT autor.Nome as Autor, COUNT(livros.LivroID) as Quantidade_Livros
FROM autor
LEFT JOIN livros ON autor.AutorID = livros.AutorID
GROUP BY autor.Nome;

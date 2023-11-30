insert into usuario(nome) values ("Pedro Vitor");
insert into usuario(nome) values ("Paulina");
insert into usuario(nome) values ("Luiz Gustavo");

insert into transacao(codigo, data, valor, usuario_id) values (1, "2023-09-11", 600.9, 1);
insert into transacao(codigo, data, valor, usuario_id) values (2, "2023-11-20", 75, 2);
insert into transacao(codigo, data, valor, usuario_id) values (3, "2023-11-26", 999.99, 3);

insert into categoria(nome) values("Memórias");
insert into categoria(nome) values("Processador");
insert into categoria(nome) values("Sistemas");
insert into categoria(nome) values("Nobreaks");

insert into produto(nome, codigo, valor, categoria_id) values ("Memória RAM 16 GB", 22, 240.8, 1);
insert into produto(nome, codigo, valor, categoria_id) values ("Pendrive 64 GB", 23, 75, 1);
insert into produto(nome, codigo, valor, categoria_id) values ("Intel Core I5", 24, 600.9, 2);
insert into produto(nome, codigo, valor, categoria_id) values ("Intel Core I7", 25, 999.99, 2);
insert into produto(nome, codigo, valor, categoria_id) values ("Nobreak Linnus", 26, 350, 4);
insert into produto(nome, codigo, valor, categoria_id) values ("Nobreak Intelbras", 27, 450.9, 4);
insert into produto(nome, codigo, valor, categoria_id) values ("Nobreak WEG", 28, 700, 4);

insert into transacao_produto(produto_id, transacao_id) values ( 3, 6);
insert into transacao_produto(produto_id, transacao_id) values ( 2, 7);
insert into transacao_produto(produto_id, transacao_id) values ( 4, 8);

-- 1
select id, data, valor,usuario_id from transacao;
-- 2
select id as ID_Venda, data as Data_Venda, valor, usuario_id as ID_Usuario from transacao;
-- 3
select id as ID_Venda, data as Data_Venda, valor, usuario_id as ID_Usuario from transacao where valor > 100.00;
-- 4
select id as ID_Venda, data as Data_Venda, valor, usuario_id as ID_Usuario from transacao  ORDER BY valor ASC;
-- 5
select MIN(valor) as Valor_menor_venda, MAX(valor) as Valor_maior_venda, COUNT(valor) as Numero_de_Vendas, AVG(valor) as Media_de_Vendas from transacao;
-- 6
select transacao_produto.produto_id, AVG(transacao.valor) AS Media_Valor_por_Produto -- Selecionando colunas específicas
from transacao_produto
INNER JOIN transacao ON transacao_produto.transacao_id = transacao.id
GROUP BY transacao_produto.produto_id;
-- 7
SELECT categoria.nome AS Categoria, COUNT(transacao_produto.produto_id) AS Quantidade_Total, -- Seleciona Categorias, Conta números de vendas de cada pedido por categoria
       SUM(produto.valor) AS Valor_Total, AVG(transacao.valor) AS Media_Valor_por_Transacao -- Soma do total das vendas por categoria e calculo da média de transações por categoria
FROM transacao_produto
JOIN produto ON transacao_produto.produto_id = produto.id -- Junção da tabela de produtos usando IDs de produto
JOIN transacao ON transacao_produto.transacao_id = transacao.id -- Junção da tabela de transações usando IDs de transação
JOIN categoria ON produto.categoria_id = categoria.id -- Junção da tabela de categorias usando IDs de categoria
GROUP BY categoria.nome -- Resultados com base no nome da categoria
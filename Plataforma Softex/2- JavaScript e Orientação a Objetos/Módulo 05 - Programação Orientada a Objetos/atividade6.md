### Luiza é desenvolvedora e está trabalhando com dois arrays. O primeiro é [23, 9, 4, 45] e o segundo é [7, 12]. Ela precisa dividir o primeiro em dois arrays e cada array gerado deve ser concatenado com o segundo array. 
### 1. Qual é o pacote que Luiza precisa utilizar? 
### 2. Se for preciso instalar esse pacote, qual é o comando que deve ser utilizado? 
### 3. Qual é o comando para importar esse pacote?
### 4. Quais as funções utilizadas neste pacote?
### 5. Quais serão os arrays resultantes dessa operação? 

## ---------------------------------------------------------------------------------------------------------------------------------------------------------

## Respostas:

### 1- Ela pode usar o pacote lodash
### 2- npm install lodash
### 3- const variavel = require('lodash')
### 4- Para Luiza as funções utilizadas deve ser "variavel.chunk(array, size)": Divide o array em partes de tamanho especificado. -> array é a especificação de qual array que vai dividir e  o size é o comprimento de cada pedaço. <br/> A outra função utilizada por ela tem que ser a de concatenar "variavel.concat(array, [values])" isso criara uma nova matriz concatenando o array com quaisquer matrizes e/ou valores adicionais.
### 5- array1 = [23 , 9, 7, 12] <br/> array2 = [4, 45, 7, 12]

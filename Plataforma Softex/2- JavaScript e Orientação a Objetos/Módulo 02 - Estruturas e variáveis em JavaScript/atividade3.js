//Primeiro código da atividade 3 do módulo
const prompt = require('prompt-sync')();
console.log('------- SISTEMA DE REPROVAÇÃO -------')
//Atribuindo as 3 notas ao aluno inserida pelo usuário
nota1 = Number(prompt('Digite a 1ª nota: '))
nota2 = Number(prompt('Digite a 2ª nota: '))
nota3 = Number(prompt('Digite a 3ª nota: '))
//Fazendo o calcúlo da média
media = (nota1 + nota2 + nota3) / 3
//Nota minima para ser aprovado é 7
condicaoFinal = media >= 7? 'Aluno aprovado' : 'Aluno reprovado'
//Exibição do resultado a partir da execução do código
console.log(condicaoFinal, '. Média final = ', media.toFixed(2));
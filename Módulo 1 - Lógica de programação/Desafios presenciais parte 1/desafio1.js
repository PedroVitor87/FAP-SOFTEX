//Faça um programa que peça ao usuário 3 notas de um aluno e mostre a média dessas notas

aluno = prompt("Digite o seu nome:")
nota1 = Number(prompt("Digite a sua nota número 1:"))
nota2 = Number(prompt("Digite a sua nota número 2:"))
nota3 = Number(prompt("Digite a sua nota número 3:"))

media = (nota1 + nota2 + nota3) / 3
console.log(aluno, "a sua média é", media.toFixed(2))
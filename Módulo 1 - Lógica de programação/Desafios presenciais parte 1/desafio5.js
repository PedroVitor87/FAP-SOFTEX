//Programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maios que 100

num1 = Number(prompt("Digite um número:"))
num2 = Number(prompt("Digite outro número 2:"))
soma = num1 + num2
if(soma > 100){
    console.log("A soma dos números", num1, "e", num2, "é igual a", soma)
}else{
    console.log("A soma dos números digitados não é superior a 100")
}
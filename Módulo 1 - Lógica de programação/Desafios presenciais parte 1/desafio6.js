//Programa que leia 3 números e mostra o maior deles

num1 = Number(prompt('Digite o primeiro número: '))
num2 = Number(prompt('Digite o segundo número: '))
num3 = Number(prompt('Digite o terceiro número: '))

if(num1 > num2 && num1 > num3){
    console.log("O primeiro número é maior")
} else if (num2 > num3){
    console.log("O segundo número é maior")
}else{
    console.log("O terceiro número é maior")
}
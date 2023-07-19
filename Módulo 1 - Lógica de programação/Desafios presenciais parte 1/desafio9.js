//Programa que peça a idade do usuário e informa uma mensagem se ele esta apto ou não a votar

idade = Number(prompt("Digite a sua idade: "))
if(idade == 16 || idade == 17){
    console.log("Voto está apto a votar, mas apenas facultativo")
}else if(idade >= 18){
    console.log("Você está apto a votar")
}else{
    console.log("Você NÃO está apto a votar")
}
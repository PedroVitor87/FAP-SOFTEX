//Algoritmo que faça o calculo de valores totais de uma compra de maças em determinado valor pela quantidade de maças compradas
maçasCompradas = Number(prompt("Digite a quantidade de Maças compradas: "))
if(maçasCompradas < 12){
    valor = 0.30
}else if(maçasCompradas >=12){
    valor = 0.25
}
valor = maçasCompradas * valor
console.log(`Valor total da compra é de R$ ${valor}`)
//Script que leia um número e mostre o dia correspondente da semana

console.log("Dias da semana para sua escolha:\n1- Domingo\n2- Segunda-feira\n3- Terça-feira\n4- Quarta-feira\n5- Quinta-feira\n6- Sexta-feira\n7- Sábado")
diasemana = Number(prompt("Digite um número de 1 a 7 para escolher um dia da semana: "))
if(diasemana == 1){
    console.log("Você escolheu o dia de Domingo.")
}else if(diasemana == 2){
    console.log("Você escolheu o dia de Segunda-feira.")
}else if(diasemana == 3){
    console.log("Você escolheu o dia de Terça-feira.")
}else if(diasemana == 4){
    console.log("Você escolheu o dia de Quarta-feira.")
}else if(diasemana == 5){
    console.log("Você escolheu o dia de Quinta-feira.")
}else if(diasemana == 6){
    console.log("Você escolheu o dia de Sexta-feira.")
}else if(diasemana == 7){
    console.log("Você escolheu o dia de Sábado.")
}else{
    console.log("Número inválido. Tente novamente")
}
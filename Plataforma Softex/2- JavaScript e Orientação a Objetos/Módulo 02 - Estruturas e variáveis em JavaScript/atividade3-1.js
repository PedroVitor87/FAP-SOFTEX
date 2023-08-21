//Segundo código da atividade 3 do módulo
const prompt = require('prompt-sync')();

function calculadoraNotaMinima(){
    console.log('------- SISTEMA DE NOTA MINIMA PARA APROVAÇÃO -------')
//Atribuindo 2 notas ao aluno inserida pelo usuário
    let nota1 = Number(prompt('Digite a 1ª nota: '))
    let nota2 = Number(prompt('Digite a 2ª nota: '))
//Definindo a média desejada como valor minimo
    const mediaDesejada = 7
//Somando as notas fornecidas pelo usuário
    const somarNotas = nota1 + nota2
//Definindo a nota minima na sua prova para ser aprovado
    const notaMinima = mediaDesejada * 3 - somarNotas
    if(notaMinima > 10){
        console.log(`O aluno não tem mais chances de aprovação pois precisaria tirar pelo menos ${notaMinima.toFixed(2)} na próxima prova.`)
    }else if(notaMinima <= 10){
        console.log(`Para passar com média de ${mediaDesejada}, você precisa tirar pelo menos ${notaMinima.toFixed(2)} na próxima prova.`)
    }
}
calculadoraNotaMinima()
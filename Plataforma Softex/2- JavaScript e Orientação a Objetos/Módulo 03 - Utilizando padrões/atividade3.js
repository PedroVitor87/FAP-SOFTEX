//Função tradicional sem parâmetros
function exibicaoDeMenu() {
    console.log('----- Calculadora: -----')
    console.log('1- Soma \n2- Subtração \n3- Multiplicação \n4- Divisão \n5- Sair')
}
//Função tradicional recebendo parâmetros
function calcular(operacao, num1, num2) {
    if (operacao === 1) {
        return num1 + num2
    } else if (operacao === 2) {
        return num1 - num2
    } else if (operacao === 3) {
        return num1 * num2
    } else if (operacao === 4) {
        return num1 / num2
    } else {
        return "Operação inválida"
    }
}
//Arrow function
const exibirResultado = resultado => {
    console.log(`Resultado: ${resultado}`)
}

exibicaoDeMenu() //Chamando a função para exibir o menu
const operacao = parseInt(prompt("Escolha uma operação:")) //Pergunta ao usuário a operação desejada

if (operacao === 5) {
    console.log("Saindo...")
} else if (operacao >= 1 && operacao <= 4) {
    const num1 = Number(prompt("Digite o primeiro número:"))
    const num2 = Number(prompt("Digite o segundo número:"))
    const resultado = calcular(operacao, num1, num2) //Chamando a função calcular e enviando os parâmetros necessários
    exibirResultado(resultado) //Chamando a arrow function e mandando o resultado como parâmetro para arrow function exibir o resultado
} else {
    console.log("Opção inválida")
}
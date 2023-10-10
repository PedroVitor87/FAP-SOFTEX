const prompt = require('prompt-sync')({sigint: true}) //Importando o módulo 'prompt-sync' para facilitar a entrada do usuário

//Interface e seus métodos abstratos para ser implementados na classe concreta
class Strategy{
    execute(num1, num2){}
}

//Implementações concretas para cada estratégia
class SumStrategy extends Strategy{
    execute(num1, num2){
        return num1 + num2
    }
}

class SubtractionStrategy extends Strategy{
    execute(num1, num2){
        return num1 - num2
    }
}

class MultiplicationStrategy extends Strategy{
    execute(num1, num2){
        return num1 * num2
    }
}

class Calculator{ //Classe que representa o contexto, utilizando uma estratégia
    constructor(strategy){
        this.strategy = strategy
    }

    calculate(num1, num2){ //Método que executa a estratégia para realizar o cálculo
        return this.strategy.execute(num1, num2)
    }
}

const num1 = parseInt(prompt("Digite um número: "))
const num2 = parseInt(prompt("Digite mais um número: "))
const operation = prompt("Operações disponíveis: \n(+) Para somar\n(-) Para subtrair\n(*) Para multiplicar\nDigite a operação desejada: ")

let strategy

switch (operation) { //Escolhe a estratégia a partir da escolha fornecida pelo usuário
    case "+":
        strategy = new SumStrategy()
        break
    case "-":
        strategy = new SubtractionStrategy()
        break
    case "*":
        strategy = new MultiplicationStrategy()
        break
    default:
        console.log("Operação inválida")
        break
}

if(strategy){ //Cria uma instância da calculadora e realiza o cálculo
    const calculator = new Calculator(strategy)
    const result = calculator.calculate(num1, num2)
    console.log(`Resultado da operação: ${result}`)
}

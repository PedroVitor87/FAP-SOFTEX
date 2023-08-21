const prompt = require('prompt-sync')(); 

function calculadora(){
    let num1 = Number(prompt('Digite o primeiro número: '))
    let num2 = Number(prompt('Digite o segundo número: '))
    let operador = prompt("Digite o operador (+, -, *, /): ")
    let resultado;

    if(operador == '+'){
        resultado = num1 + num2
    }else if(operador == '-'){
        resultado = num1 - num2
    }else if(operador == '*'){
        resultado = num1 * num2
    }else if(operador == '/'){
        resultado = num1 / num2
        let resto = num1 % num2
        console.log("Resto:", resto.toFixed(2))
    }else {
        console.log("Operador inválido.")
    }
    console.log("Resultado:", resultado)
}
calculadora()
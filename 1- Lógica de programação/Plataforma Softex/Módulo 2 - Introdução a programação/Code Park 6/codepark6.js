function calculadora(n1, n2, op){
    if(op == 1){
        return n1+n2
    }
    else if(op == 2){
        return n1-n2
    }
    else if(op == 3){
        return n1*n2
    }
    else if(op == 4){
        return n1/n2
    }
    else{
        return 0
    }
}
operação = Number(prompt("Escolha a operacao que deseja ser realizada, digite: \n 1 - Adicao; \n 2 - Subtracao; \n 3 - Multiplicação; \n 4 - Divisao; \n"))
num1 = Number(prompt("Digite um número: "))
num2 = Number(prompt("Digte outro número: "))
console.log(calculadora(num1, num2, operação))
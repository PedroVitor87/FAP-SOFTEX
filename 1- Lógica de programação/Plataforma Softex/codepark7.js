function calculadora() {
    while (true) {
        console.log("1: Soma");
        console.log("2: Subtração")
        console.log("3: Multiplicação")
        console.log("4: Divisão")
        console.log("0: Sair")

        const escolhaOperacao = Number(prompt("Digite o número para a operação correspondente:"))

        if (escolhaOperacao === 0) {
            console.log("Saindo...")
            break
        }
        else if (![1, 2, 3, 4].includes(escolhaOperacao)){
            console.log("Essa opção não existe.")
            continue
        }
        const num1 = Number(prompt("Digite o primeiro valor:"))
        const num2 = Number(prompt("Digite o segundo valor:"))
        if (escolhaOperacao === 1){
            resultado = num1 + num2
            console.log(`Valor da soma = ${resultado}`)
            continue
        }
        else if (escolhaOperacao === 2){
            resultado = num1 - num2
            console.log(`Valor da subtração = ${resultado}`)
            continue
        }
        else if (escolhaOperacao === 3){
            resultado = num1 * num2
            console.log(`Valor da multiplicação = ${resultado}`)
            continue
        }
        else if (escolhaOperacao ===4){
            resultado = num1 / num2
            console.log(`Valor da divisão = ${resultado}`)
            continue;
        }
    }
}
calculadora()
const prompt = require('prompt-sync')();

//Função criada para obter os números digitados pelo usuário
function pedirNumeros() {
    const num1 = Number(prompt("Digite um número: "));
    const num2 = Number(prompt("Digite outro número: "));
    return { num1, num2 }; //Retornar os números digitados como um objeto
}

//Função criada para pegar os valores da função pedirNumeros() e fazer o calculo matemático
function dividir() {
    try {
        const { num1, num2 } = pedirNumeros(); //Chama a função e obtem os valores e transforma em objeto

        if (num2 === 0) { //Verifica se o segundo número é 0, se for ele lançara uma exceção
            throw new Error("Não é possível dividir por zero."); //Irá lançar uma exceção (erro) se o segundo número for zero
        }
        const resultado = num1 / num2;
        console.log(`O resultado da divisão é: ${resultado}`);

    } catch (error) { //Exibe o erro se ocorrer
        console.error(`Ocorreu um erro: ${error.message}`);
    } finally { //Exibe a mensagem de conclusação independente de ter erro ou não
        console.log("A operação de divisão foi concluída.");
    }
}

dividir(); //Chama a função principal dividir() que executa o código

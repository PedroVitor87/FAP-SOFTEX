//Função que mostra na tela um número na tela fornecido pelo usário, porem invertido
function inverterNumero(numero) {
    // Converter o número para string
    let numeroString = numero.toString();
    // Converter a string para um array de caracteres
    let arrayCaracteres = numeroString.split('');
    // Inverter o array
    let arrayInvertido = arrayCaracteres.reverse();
    // Juntar os caracteres novamente em uma string
    let numeroInvertido = arrayInvertido.join(''); //Entre aspas para retirar as vírgulas
    return numeroInvertido;
  }
  
  // Exemplo de uso:
  let numeroFornecido = Number(prompt("Digite um número: "));
  let numeroInvertido = inverterNumero(numeroFornecido); //Criando variável para a função
  console.log(numeroInvertido); // Saída: "54321"
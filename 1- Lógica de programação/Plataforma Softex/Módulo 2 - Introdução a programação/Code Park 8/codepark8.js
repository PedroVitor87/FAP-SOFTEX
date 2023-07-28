function ObterAnoNascimento() { //Função para obter o ano de nascimento
  while (true) {
    const anodonascimento = Number(prompt('Digite o ano em que você nasceu: '));

    if (isNaN(anodonascimento) || anodonascimento < 1922 || anodonascimento > 2021) { //isNaN - para saber se é número ou não
      console.log('Ano de Nascimento inválido. Tente novamente.')
      //Se esse if for verdadeiro ele irá alertar que foi digitado algo incorreto, e irá perguntar novamente
    } else {
      return anodonascimento //Digitado corretamente irá retorna o ano do nascimento
    }
  }
}

function calcularIdade(anoNascimento) { //Função para calcular a idade
  const anoAtual = new Date().getFullYear() //pega o ano atual
  return anoAtual - anoNascimento //Retornará a idade
}

function exibirIdade() { //Função que irá exibir a idade
  const nome = prompt('Digite seu nome: ')
  const anoNascimento = ObterAnoNascimento()
  const idade = calcularIdade(anoNascimento)

  console.log(`Olá ${nome}, sua idade no ano atual é de ${idade} anos!`)
}

exibirIdade() //Execução do programa
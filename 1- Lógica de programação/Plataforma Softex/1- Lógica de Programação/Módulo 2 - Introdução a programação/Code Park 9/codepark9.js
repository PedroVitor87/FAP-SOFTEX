const opcoesdevoto = alert("Candidato X => 889 \nCandidato Y => 847 \nCandidato Z => 515 \nBranco => 0\n Finalizar votação => 999");
//Definindo variáveis de cada opação de voto e contador no inicio 0
let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let nulo = 0;

function candidatos() { //Função para a pergunta em qual candidato votar, e haver o voto da maneira correta
    while (true) {
        const numeroCandidato = Number(prompt('Digite o seu voto (Digite 999 para finalizar a votação): '));
        if (isNaN(numeroCandidato) || numeroCandidato === null) { //null para se não haver voto, tenta novamente
            alert('Voto inválido. Vote novamente.');
        } else {
            return numeroCandidato;
        }
        }
}

function calcularVotos() { //Função para calcular os votos
    let voto = candidatos(); //Retornando o número da função candidatos e calcular o voto com o respectivo número
    while (voto !== 999) {
        if (voto === 889) {
            candidato_X += 1;
        } else if (voto === 847) {
            candidato_Y += 1;
        } else if (voto === 515) {
            candidato_Z += 1;
        } else { //Qualquer outro número que não tenha disponibilidade será considerado como nulo
            nulo += 1;
        }
        voto = candidatos(); //Retorna a função novamente até que seja digitado 999 para finalizar a votação
    }
}

function exibirResultado() { //Funçãoo para exibir os resultados
    alert("Resultado da eleição:\n" +
    "Candidato X: " + candidato_X + " votos\n" +
    "Candidato Y: " + candidato_Y + " votos\n" +
    "Candidato Z: " + candidato_Z + " votos\n" +
    "Votos Nulos: " + nulo + " votos");
}

calcularVotos();
exibirResultado();
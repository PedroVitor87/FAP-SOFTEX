class AlunoMatriculado {
    constructor(matricula, nome, prova1, prova2, trabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.prova1 = prova1;
        this.prova2 = prova2;
        this.trabalho = trabalho;
        this.pesoDeProva = 2.5; // Peso das provas
        this.pesoDeTrabalho = 2.5; // Peso do trabalho
    }
    get media() {
        const resultado = `${this.nome} de matricula nº ${this.matricula} teve média igual ${this.calculaMedia()}, prova final? ${this.final()}`;
        return resultado
    }
    calculaMedia() {
        const somaNotas = this.prova1 * this.pesoDeProva + this.prova2 * this.pesoDeProva + this.trabalho * this.pesoDeTrabalho;
        const somaPesos = this.pesoDeProva * 2 + this.pesoDeTrabalho;
        const mediaFinal = somaNotas / somaPesos;
        return mediaFinal.toFixed(2)
    }
    final () {
        if(this.calculaMedia() < 6){
            return 'Sim'
        }else{
            return 'Não';
        }
    }
}
//Perguntas ao usuário para ir para a classe construtora
const nome = prompt('Digite o nome do aluno: ')
const matricula = Number(prompt('Digite a matricula do aluno: '))
const prova1 = Number(prompt('Digite a primeira nota do aluno: '))
const prova2 = Number(prompt('Digite a segunda nota do aluno: '))
const trabalho = Number(prompt('Digite a nota de trabalho do aluno: '))

//Informando os valores para a classe construtora a partir das respostas dada pelo usuário
const aluno = new AlunoMatriculado(matricula, nome, prova1, prova2, trabalho); 
console.log(aluno.media);
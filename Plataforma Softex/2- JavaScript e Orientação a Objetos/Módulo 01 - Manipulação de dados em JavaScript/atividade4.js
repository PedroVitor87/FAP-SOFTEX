const prompt = require('prompt-sync')();

class Cadastro {
    constructor(nome, idade, salario, possuiDiploma){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.possuiDiploma = possuiDiploma;
    }
    //Exibindo informações cadastradas
    get exibeCadastro(){
        console.log('EXIBIÇÃO DE CADASTRO:');
        return `NOME: ${this.nome}, \nIDADE: ${this.idade} anos, \nSALÁRIO: R$ ${this.salario}, \nPOSSUI DIPLOMA: ${this.possuiDiploma}`;
    }
}
//Criando pessoa1 com informações já definidas
pessoa1 = new Cadastro('Pedro Vitor', 20, 1500, 'Não');

//Criando pessoa2 com informações dadas pelo usuário
console.log('\nCadastrando pessoa inserida por usuário: ');
let nome = prompt('Digite o seu nome: ');
let salario = Number(prompt('Digite o seu salário: '));
let idade = Number(prompt('Digite a sua idade: '));
let possuiDiploma = prompt('Você possui diploma: ');
pessoa2 = new Cadastro(nome, idade, salario, possuiDiploma); //lendo informações das variáveis que foi atribuido valores por usuário

//Execução do código
console.log('Pessoa 1, já inserida no programa');
console.log(pessoa1.exibeCadastro);
console.log('\nPessoa 2, inserida por usuário');
console.log(pessoa2.exibeCadastro);

class Pessoa{ //Classe mãe
    constructor(nome, idade, cargo, salario){
        this._nome = nome;
        this._idade = idade;
        this._cargo = cargo;
        this._salario = salario;
    }
    get exibirInformacoes(){ //Método acessor para obter as informações
        return `Nome: ${this._nome} \nIdade: ${this._idade} anos \nCargo: ${this._cargo} \nSalário: R$ ${this._salario}`;
    }
}
class Funcionario extends Pessoa{ //Classe filha da classe Pessoa
    constructor(nome, idade, cargo, salario, departamento){
        super(nome, idade, cargo, salario);
        this._departamento = departamento
    }
    get informacoesDeFuncionario(){ //Método para herdar a função de informações da classe mãe e adcionar a classe filha com o atributo departamento
        return `${super.exibirInformacoes} \nDepartamento: ${this._departamento}`
    }
}

//Exemplificando o uso da classes
//Exemplo de uso da classe pessoa
const pessoa1 = new Pessoa("Gabriela", 25, "Analista de Marketing", 4000);
console.log(`Informações da Pessoa: ${pessoa1.exibirInformacoes}`);

//Exemplo da classe filha funcionário, herdando o método acessor exibirInformacoes() da classe mãe
const funcionario1 = new Funcionario("Pedro Vitor", 20, "Programador Junior", 1500, "TI");
console.log(`\nInformações da Pessoa: ${funcionario1.informacoesDeFuncionario}`);
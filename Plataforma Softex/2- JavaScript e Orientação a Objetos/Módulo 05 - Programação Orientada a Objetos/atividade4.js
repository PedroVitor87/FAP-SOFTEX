class Pessoa{
    constructor(nome, sobrenome, idade, genero){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._idade = idade;
        this._genero = genero;
    }
    nomeCompleto(){
        return `Nome completo: ${this._nome} ${this._sobrenome}`;
    }
    idadeComGenero(){
        return `Idade: ${this._idade}; Gênero: ${this._genero}`;
    }
    get informacoesCompletas(){ //Método acessor para obter todas as informações a partir de outras funções, ou também poderia ser a partir do constructor
        return `${this.nomeCompleto()}; ${this.idadeComGenero()}`;
    }
    set idade(novaIdade){
        if(novaIdade >= 0){
            this._idade = novaIdade
        } else {
            return `Não é possivel alterar idade para valores igual a 0, ou valores negativos`
        }
    }
}

const pessoa1 = new Pessoa("Pedro Vitor", "Cavalcanti Rodrigues", 20, "M")

//Usando o método acessor .get() para obter todas as informações antes de alguma alteração
console.log(pessoa1.informacoesCompletas); 

//Usando o método modificador .set() para alterar a idade
pessoa1.idade = 30

//Mostrando todas as informações com a idade atualizada
console.log(pessoa1.informacoesCompletas);
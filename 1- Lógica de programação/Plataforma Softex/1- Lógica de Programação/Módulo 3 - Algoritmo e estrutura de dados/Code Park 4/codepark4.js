class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    adicionarFilho(filho) { //Adcionara filho
        this.filho = filho;
    }

    imprimirComFilho() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
        if (this.filho) {
            console.log(`Filho(a): ${this.filho.nome}`);
        } else {
            console.log("Sem filho(a)");
        }
    }
}

//Criando pessoa
const pessoa1 = new Pessoa("João", 35);

//Criando pessoa que sera filhos dessas pessoas
const pessoa3 = new Pessoa("Pedro", 8);

//Estabelecendo relações de pais e filhos
pessoa1.adicionarFilho(pessoa3); //pessoa3 será filho da pessoa1 chamando a função adcionarFilho()

console.log("Lista Encadeada de Pessoas:");
pessoa1.imprimirComFilho();
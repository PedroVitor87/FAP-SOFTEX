class pessoa {
    constructor(nome, sexo, idade){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
    get informacoes(){
        const nomeIdadeSexo = `${this.nome}, de gênero ${this.sexo} e com ${this.idade} anos de idade.`
        return nomeIdadeSexo
    }
}
const pessoa1 = new pessoa('Pedro Vitor', 'Masculino', 20)
console.log(pessoa1.informacoes);
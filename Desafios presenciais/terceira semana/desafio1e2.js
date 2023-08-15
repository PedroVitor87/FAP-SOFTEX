//Crie um objeto com os seus dados pessoais que deve possui pelo menos duas propriedades nome e sobrenome
const dadosPessoais = {
    nome: "Pedro Vitor",
    sobrenome: "Cavalcanti Rodrigues",
    idade: "21 anos",
    genero: "Masculino",
    endereco: "Rua José Francisco Rodrigues, nº 134",
    mostrarDados: function(){
        return console.log(`Nome: ${this.nome}, idade ${this.idade}, gênero ${this.genero} e resididente no endereço ${this.endereco}`)
    }
}
dadosPessoais.mostrarDados()
//2. Crie um método no objeto anterior, que mostre o seu nome completo
function nomeSobrenome (){
    return console.log(dadosPessoais.nome, dadosPessoais.sobrenome)
}
nomeSobrenome()
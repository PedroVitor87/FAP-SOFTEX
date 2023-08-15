//Função que retorne um o cubo de um número fornecido pelo usuário
function cubo(){
    let numero = Number(prompt("Digite um número: "))
    rescubo = numero ** 3
    console.log(`O resultado do número ao cubo é ${rescubo}`)
}
cubo() //Chamando a função
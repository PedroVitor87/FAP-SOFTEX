//Crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late ao ver um homem
let cachorroLabrador = {
    idade: 10,
    cor: 'Preto',
    latir: function(verHomem){
        if(verHomem){
            return "WOF! WOF! O cachorro está latindo ao ver um homem"
        }else{
            return "O cachorro não está latindo"
        }
    }
}
let verHomem = true
console.log(cachorroLabrador.latir(verHomem))

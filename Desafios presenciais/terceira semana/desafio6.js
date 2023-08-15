//Crie um objeto com dados bancário de um usuário. Crie uma função dentro do objeto que mostre todos os dados bancários do usuário;

const dadosbancarios = {
    banco: 'Banco Inter',
    agencia: 1001,
    conta: '004557825-56',
    tipo: 'Corrente',
    mostrarDados: function(){
        console.log(`Banco: ${dadosbancarios.banco}`)
        console.log(`Agencia: ${dadosbancarios.agencia}`)
        console.log(`Conta: ${dadosbancarios.conta}`)
        console.log(`Tipo: ${dadosbancarios.tipo}`)
    }
}

dadosbancarios.mostrarDados()
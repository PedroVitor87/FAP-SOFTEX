class ContaBancaria {
    constructor(conta, saldo, titular) {
        //Atributos da conta bancária
        this.conta = conta;
        this.saldo = saldo;
        this.titular = titular;
    }

    consultarSaldo() { //Método para consultar saldo
        console.log(`Saldo atual da conta ${this.conta} de ${this.titular}: R$ ${this.saldo}`);
    }

    depositar(valor) { //Método para depositar valor
        if(valor > 0 && typeof valor === "number") { //Verificando se o valor informado é válido
            this.saldo += valor; //Atualizando o valor diretamente na variável de saldo
            console.log(`\nDepósito de R$ ${valor} na conta ${this.conta} de ${this.titular} realizado.`);
            this.consultarSaldo(); //Chamando a função dentro de outra para mostrar o saldo após o depósito
        } else {
            console.log(`Você não pode depositar um valor inválido.`);
        }
    }

    sacar(valor) { //Método para sacar valor
        if (valor > 0 && typeof valor === "number" && valor <= this.saldo) { //Verificando se o valor informado é válido
            this.saldo -= valor; //Atualizando o valor diretamente na variável de saldo
            console.log(`\nSaque de R$ ${valor} na conta ${this.conta} de ${this.titular} realizado.`);
            this.consultarSaldo(); //Chamando a função dentro de outra para mostrar o saldo após o saque
        } else {
            console.log(`Você não pode sacar um valor inválido ou acima do seu saldo disponível.`);
        }
    }
}

// Exemplo de uso da classe
const minhaConta = new ContaBancaria(12345, 1000, "Pedro Vitor");
minhaConta.consultarSaldo();
minhaConta.depositar(500);
minhaConta.sacar(200);

//---------------------------------------------------------------------------------------------------------------------------------

class Playlist {
    constructor(nome, autor) {
        this.nome = nome;
        this.autor = autor;
        this.musicas = [];
    }

    adicionarMusica(musica) {
        this.musicas.push(musica);
    }

    mostrarMusicas() {
        console.log(`Músicas da playlist "${this.nome}" por ${this.autor}:`);
        this.musicas.forEach((musica, index) => {
          console.log(`${index + 1}. ${musica.titulo} - ${musica.artista}`);
        });
    }

    reproduzirPlaylist() {
        console.log(`\nReproduzindo playlist "${this.nome}" por ${this.autor}:`);
    }
}

const minhaPlaylist = new Playlist("Músicas para Relaxar", "Pedro Vitor");
minhaPlaylist.adicionarMusica({ titulo: "musica1", artista: "Artista 1" }); //Adcionando músicas a playlist
minhaPlaylist.adicionarMusica({ titulo: "musica2", artista: "Artista 2" }); //Adcionando músicas a playlist
minhaPlaylist.adicionarMusica({ titulo: "musica3", artista: "Artista 3" }); //Adcionando músicas a playlist
minhaPlaylist.reproduzirPlaylist(); //Função para reproduzir a playlist
minhaPlaylist.mostrarMusicas(); //Função para mostrar as músicas

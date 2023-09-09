//Classes de objetos materiais
class Celular {
    constructor(marca, modelo, memoria){
        //Seus atributos
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
    }

    fazerLigacao(numero){ //Método para a realização de uma ligação
        console.log(`Ligando para o número ${numero}`);
    }
    enviarMensagem(conteudo, numero){ //Método para o envio de uma mensagem
        console.log(`Enviando mensagem com conteúdo ${conteudo} para o número ${numero}`);
    }
    tirarFoto() { //Método para tirar foto
        console.log("Câmera ativada. Foto tirada.");
    }
}

const celular1 = new Celular("Xiaomi", "Redmi Note 12", 128); //Adcionando atributos ao celular
console.log(celular1) //Mostrando seus atributos no console.log
//Chamando seus métodos
celular1.fazerLigacao("(87) 99999-0000");
celular1.enviarMensagem("Olá, amigo!", "(87) 99999-0000");
celular1.tirarFoto();

//---------------------------------------------------------------------------------------------------------------------------------

class MaquinaDeLavar {
    constructor(marca, modelo, cor, estado){
        //Seus atributos
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.estado = "Desligada"
    }
    ligar() { //Método para ligar a máquina
        if(this.estado == "Desligada") {
          this.estado = "Ligada";
          console.log("Máquina de lavar foi ligada.");
        } else {
          console.log("A máquina já está ligada.");
        }
    }
    desligar(){ //Método para desligar a máquina
        if(this.estado != "Desligada"){
            this.estado = "Desligada";
            console.log("Máquina de lavar desligada.");
        } else{
            console.log("A máquina já está desligada.");
        }
    }
    consultarEstado() { //Método para consultar o estado da máquina
        console.log(`A máquina se encontra ${this.estado}`);
    }
}

const maquina1 = new MaquinaDeLavar("Consul", "Lavadora de Roupas CWH12BB", "Branca"); //Adcionando atributos a máquina de lavar
console.log("\n", maquina1);
//Chamando seus métodos
maquina1.ligar();
maquina1.desligar();
maquina1.consultarEstado()
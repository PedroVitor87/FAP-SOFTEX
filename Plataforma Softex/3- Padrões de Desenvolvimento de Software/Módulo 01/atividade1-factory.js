//Interface comum
class InterfaceComputador{
    constructor(ram, hdd, cpu, type){
        this.ram = ram + " GB"
        this.hdd = hdd + " GB"
        this.cpu = cpu + " GHz"
        this.type = type
    }
    get memoriaRam(){
        return this.ram
    }
    get memoriaHdd(){
        return this.hdd
    }
    get velocidadeCpu(){
        return this.cpu
    }
    get computadorType(){
        return this.type
    }
    get toString(){ //Método para imprimir todos atributos
        return `Informações do Computador -->> 
        RAM: ${this.memoriaRam}, HDD: ${this.memoriaHdd}, 
        CPU: ${this.velocidadeCpu}, Tipo: ${this.computadorType}`
    }
}

//Subclasse do tipo Pc
class Pc extends InterfaceComputador {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, "PC") //Adciona o tipo PC
    }
}

//Subclasse do tipo Server
class Servidor extends InterfaceComputador {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, "Servidor") //Adciona o tipo Servidor
    }
}

//Uso do Factory para criar computadores do tipo Server ou PC
class FabricarComputador {
    create(ram, hdd, cpu, type){
        switch(type){
            case "pc":
                return new Pc(ram, hdd, cpu)
            case "server":
                return new Servidor(ram, hdd, cpu)
        }
    }
}

//Usando o Factory para criar computadores do tipo PC e Servidores
const fabrica = new FabricarComputador
const meuPC1 = fabrica.create(16, 500, 4, "pc")
const meuPC2 = fabrica.create(12, 480, 3.2, "server")

//Exibindo informações dos computadores criados
console.log(meuPC1.toString);
console.log(meuPC2.toString);
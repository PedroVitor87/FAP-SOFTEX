//Classe Abstrata
class Veiculo {
    constructor(modelo, marca, cor, numDeRodas) {
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.numDeRodas = numDeRodas
    }

    clone() { //Cria um novo objeto com base no protótipo(this)
        return Object.create(this)
    }

    represent() { //Método represent para retornar uma representação textual do veículo
        return `Veículo: ${this.marca} ${this.modelo}, ${this.cor}, ${this.numDeRodas} Rodas`
    }
}

//Subclasse Carro
class Carro extends Veiculo {
    constructor(modelo, marca, cor, numDeRodas, numDePortas) {
        super(modelo, marca, cor, numDeRodas)
        this.numDePortas = numDePortas
    }

    represent() { //Sobrescreve o método represent para incluir o número de portas
        return `${super.represent()}, ${this.numDePortas} Portas`
    }
}

//Subclasse Moto
class Moto extends Veiculo {
    constructor(modelo, marca, cor, numDeRodas, cilindrada) {
        super(modelo, marca, cor, numDeRodas)
        this.cilindrada = cilindrada
    }

    represent() { //Sobrescreve o método represent para incluir o número de cilindradas
        return `${super.represent()}, Cilindrada: ${this.cilindrada}`
    }
}

//Classe Aplicacao que cria e gerencia a clanagem de veiculos
class Aplicacao {
    constructor() {
        this.veiculos = [] //Array para o armazenamento de veiculos
    }

    //Método create para adicionar um novo veículo (Carro ou Moto)
    adicionarVeiculo(tipo, modelo, marca, cor, numDeRodas, propriedades) {
        switch (tipo) {
            case "Carro":
                const carro = new Carro(modelo, marca, cor, numDeRodas, propriedades.numDePortas)
                this.veiculos.push(carro)
                return carro
            case "Moto":
                const moto = new Moto(modelo, marca, cor, numDeRodas, propriedades.cilindrada)
                this.veiculos.push(moto)
                return moto
            default:
                throw new Error("Tipo de veículo desconhecido")
        }
    }

    clonarVeiculos() { //Clona todos os veículos no array e retorna uma lista de clones
        const veiculosClonados = []

        //Clona cada veículo e adicione à lista de veículos clonados
        for (const veiculo of this.veiculos) {
            const veiculoClonado = veiculo.clone()
            veiculosClonados.push(veiculoClonado)
        }

        return veiculosClonados
    }
}

const app = new Aplicacao() //Cria uma instância da classe Aplicacao
const carro1 = app.adicionarVeiculo("Carro", "Sedan", "Toyota", "Azul", 4, { numDePortas: 4 })
const carro2 = app.adicionarVeiculo("Carro", "SW4", "Toyota", "Branca", 4, { numDePortas: 4 })
const carro3 = app.adicionarVeiculo("Carro", "Hilux", "Toyota", "Preta", 4, { numDePortas: 4 })
const moto1 = app.adicionarVeiculo("Moto", "XRE 190", "Honda", "Vermelha", 2, { cilindrada: "184,4cc" })
const moto2 = app.adicionarVeiculo("Moto", "XRE 300", "Honda", "Preta", 2, { cilindrada: "291,6 cc" })
const moto3 = app.adicionarVeiculo("Moto", "CG 160 Titan", "Honda", "Azul", 2, { cilindrada: "600cc" })

const veiculosClonados = app.clonarVeiculos() //Cria váriavel para clonar os veículos

//Itera pelos veículos clonados e imprime suas representações
for (const veiculo of veiculosClonados) {
    console.log(veiculo.represent())
}

//console.log(app.veiculos) //Mostra o Array com os veiculos criados a partir da instancia criada na váriavel app

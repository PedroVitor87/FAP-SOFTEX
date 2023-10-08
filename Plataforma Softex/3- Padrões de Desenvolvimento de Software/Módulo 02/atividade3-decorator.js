class SandWich{ //Classe Abstrata: Sanduíche
    get price(){
        return 0 //Custo do Sanduíche
    }
    get order(){
        return `Sanduíche de carne`
    }
}

class RoastChicken extends SandWich{ //Classe Concreta: Sanduíche de Frango assado
    get price(){
        return 4.50
    }
    get order(){
        return `Sanduíche de frango assado`
    }
}

class DecoratorSandWich extends SandWich{ //Classe Abstrata: Decorador do Sanduíche
    constructor(sandwich){
        super()
        this._sandwich = sandwich
    }
    
    //Implementações delegadas pelos métodos abstratos para o decorador
    get order(){
        return this._sandwich.order
    }
    get price(){
        return this._sandwich.price
    }
}

class Pepperoni extends DecoratorSandWich{ //Classe Concreta: Adcional de Pepperoni (Decorador Concreto)
    constructor(sandwich){
        super(sandwich)
    }

    get order(){
        return `${this._sandwich.order} com pepperoni`
    }
    get price(){
        return this._sandwich.price + 0.99 //Adciona o custo do peperonni
    }
}

class QueijoMussarelaRalado extends DecoratorSandWich{ //Classe Concreta: Adcional de Queijo Mussarela Ralado (Decorador Concreto)
    constructor(sandwich){
        super(sandwich)
    }

    get order(){
        return `${this._sandwich.order}, com queijo mussarela ralado`
    }
    get price(){
        return this._sandwich.price + 2
    }
}

// Cria um sanduíche de frango assado decorado com queijo mussarela ralado e pepperon
const sanduicheBase = new RoastChicken() // Sanduíche de frango assado
const sanduicheDecorado = new QueijoMussarelaRalado(new Pepperoni(sanduicheBase))

// Exibe o pedido e o custo total do sanduíche decorado
console.log(`Pedido: ${sanduicheDecorado.order} \nCusto: $${sanduicheDecorado.price.toFixed(2)}`)
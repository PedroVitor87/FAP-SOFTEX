class Duck { //Interface Pato
    grasnar(){ //Som do pato
        console.log("Quack! Quack!")
    }
    flyDuck(){ //Método voar pato
        console.log("Voando como um Pato!")
    }
}

class Chicken { //Interface Galinha
    cluck(){ //Som da galinha
        console.log("Cocoricó! Cocoricó!")
    }
    flyChicken(){
        console.log("Voando como uma Galinha!")
    }
}

class AdapterDuck extends Chicken { //Adaptador para o Pato se comportar como Galinha
    constructor(duck){
        super()
        this.duck = duck
    }
    cluck(){
        this.duck.grasnar() //Pato "grasna" como se fosse uma galinha
    }
    flyChicken(){
        this.duck.flyDuck() //Pato voa como se fosse uma galinha
    }
}

class AdapterDuckDemo{
    main() {
        const duck = new Duck() //Instância a class Duck
        const adapterDuck = new AdapterDuck(duck)
        //Instância do AdapterDuck passando o Pato como argumento
    
        console.log("Pato se comportando como Galinha:")
        adapterDuck.cluck()
        //Chama o método cluck do AdapterDuck, que por sua vez chama o grasnar do Pato
        adapterDuck.flyChicken()
      }
}

//Criei uma instância da classe AdapterDuckDemo para posteriormente chamar o método e executar a demonstração
const demo = new AdapterDuckDemo
demo.main()
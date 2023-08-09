class Calculadora {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    get resultado(){
        const somaResultado = this.soma();
        const subtracaoResultado = this.subtracao();
        const multiplicacaoResultado = this.multiplicacao();
        const divisaoResultado = this.divisao();

        return `Resultados:
        ${this.num1} + ${this.num2} = ${somaResultado}
        ${this.num1} - ${this.num2} = ${subtracaoResultado}
        ${this.num1} x ${this.num2} = ${multiplicacaoResultado}
        ${this.num1} / ${this.num2} = ${divisaoResultado}`;
    }
    soma(){
        return this.num1 + this.num2;
    }
    subtracao(){
        return this.num1 - this.num2;
    }
    multiplicacao(){
        return this.num1 * this.num2;
    }
    divisao(){
        const dividir = this.num1 / this.num2;
        return dividir.toFixed(2);
    }
}
const calculo1 = new Calculadora(10, 9);
console.log(calculo1.resultado);
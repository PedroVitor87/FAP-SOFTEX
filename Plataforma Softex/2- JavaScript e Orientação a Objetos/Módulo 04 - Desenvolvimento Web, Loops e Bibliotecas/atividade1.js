class Banco{
    constructor(tipoConta, agencia, numConta, saldo){
        this.tipoConta = tipoConta;
        this.agencia = agencia;
        this.numConta = numConta;
        this.saldo = saldo;
    }
    conta(){ //Método para exibir dados da conta
        return `${this.agencia}, Número de conta: ${this.numConta}, tipo: ${this.tipoConta}`
    }
    mostrarSaldo(){ //Método para mostrar saldo
        return `Saldo disponível, R$ ${this.saldo}`; 
    }
    deposito(deposito){ //Método para depósito
        this.saldo += deposito;
        return `Depósito de R$ ${deposito} realizado. Saldo atual: R$ ${this.saldo}`;
    }
    saque(saque){ //Método para saque
        if(saque <= this.saldo){
            this.saldo -= saque;
            return `Saque de R$ ${saque} realizado. Saldo atual: R$ ${this.saldo}`;
        }
        else{
            return 'Saldo insuficiente para realizar o saque';
        }
    }
}

const conta1 = new Banco('Conta Corrente', 'Agência 1111', 12345678, 10000);
console.log(`Saldo atual: R$ ${conta1.mostrarSaldo()}`);
console.log(conta1.deposito(550));
console.log(conta1.saque(320));
console.log(`Número da conta: ${conta1.conta()}`);

class SistemaSeguranca {
    private static instance: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "SenhaSecretaBase123";

    private constructor() {} //Construtor privado para evitar instânciação

    public static getInstance(): SistemaSeguranca {
        if(!SistemaSeguranca.instance) { //Verificação para saber se é nulo ou não, se for cria a instância senão retorna ela mesma
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    }

    public acessarBaseSecreta(senhaInserida: string): void { //Método para identificar se a senha é correta
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Acesso concedido!");
        } else {
            console.log("Acesso negado!");
        }
    }
}

const sistemaSeguranca = SistemaSeguranca.getInstance(); //Instância do código a partir do método estático

sistemaSeguranca.acessarBaseSecreta("senha1234"); //Tentativa de senha incorreta com resultado de Acesso negado!
sistemaSeguranca.acessarBaseSecreta("SenhaSecretaBase123"); //Tentativa de senha digitada corretamente com resultado de acesso concedido!
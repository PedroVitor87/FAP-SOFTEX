class Usuario {
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }
    get cadastroUsuario(){
        return `
        Email cadastrado: ${this.email}, 
        Senha cadastrada: ${this.senha}`
    }
}

const email = prompt('Digite o seu email: ');
const senha = prompt('Digite a sua senha: ');

const usuario = new Usuario(email, senha);
console.log(usuario.cadastroUsuario);
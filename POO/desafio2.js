class usuario {
    constructor(email, senha){
        this.email = email
        this.senha = senha
    }
}

const email = prompt('Digite o seu email: ');
const senha = Number(prompt('Digite a sua senha: '));

const usuario = new usuario(email, senha);
console.log(usuario.usuario);
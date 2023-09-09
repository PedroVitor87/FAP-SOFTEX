//Usando o static para resolver o exercicio
class ParOuImpar{
    static numeroParOuImpar(num){
        if(num % 2 == 0){
            return `O número ${num} é PAR`;
        } else {
            return `O número ${num} é IMPAR`;
        }
    }
}
console.log(ParOuImpar.numeroParOuImpar(9))



// Resolvendo exercicio instaciando a classe
// class ParOuImpar{
//     constructor(numero){
//         this.numero = numero
//     }
//     numeroParOuImpar(){
//         if(this.numero % 2 == 0){
//             return `O número ${this.numero} é PAR`;
//         } else {
//             return `O número ${this.numero} é IMPAR`;
//         }
//     }
// }
// const num1 = new ParOuImpar(9)
// console.log(num1.numeroParOuImpar()); 
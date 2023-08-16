const prompt = require('prompt-sync')(); 
const notas = [];

for (let i = 0; i < 3; i++) {
    while (true){
        const nota = Number(prompt(`Insira a nota entre 0 e 10: `));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log("Nota inválida. Por favor, insira uma nota entre 0 e 10.");
            continue //Retornará ao inicio do loop while por ser nota inválida
        }
        notas.push(nota)
        break //Para parar o loop quando for adcionado uma nota válida
    }
}

if(notas.length == 3){
    const somaNotas = notas.reduce((acumulador, valor) => { //O método irá somar os valores dentro do array
        acumulador += valor;
        return acumulador;
    }, 0);
    const media = somaNotas / 3
    console.log(`Média = ${media.toFixed(2)}`); //toFixed(2) - irá retorna só mais duas casas decimais
}
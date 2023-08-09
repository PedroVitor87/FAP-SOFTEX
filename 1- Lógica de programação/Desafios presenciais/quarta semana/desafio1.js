let arrayA = []

for(let i=0;  i < 10; i++){
    inserir = Number(prompt("Insira um número para o array: "))
    arrayA.push(inserir)
}
console.log(arrayA)

const arrayB = arrayA.map(valor => {
    return valor % 2 == 0? valor * 5: valor + 5;
});
console.log(arrayB)
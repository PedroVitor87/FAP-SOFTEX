// Usando os métodos, POP, SHIFT, UNSHIFT, PUSH. Faça o que se pede:

// Const numbers = [1, 2, 3, 4, 5,8,9,10,14]
// • Adicione o numero -1 ao inicio do array
// • Remova o ultimo elemento do array
// • Remova os numeros 5,8,9
// • Adicione os números [50,60,70] ao final do array
// • Remova o primeiro elemento do array
const numeros = [1, 2, 3, 4, 5, 8, 9, 10, 14];
const adciona = numeros.unshift(-1) //Adciona o elemento no inicio do array
const removido = numeros.pop() //Remove último elemento
const removerTresNumeros = numeros.splice(4, 3)
const adcionaTresNumeros = numeros.push(50, 60, 70)
const removePrimeiroElemento = numeros.shift()
console.log(numeros);


const estudantes = [
    {nome: 'José', nota: 5.7},
    {nome: 'Maria', nota: 4.8},
    {nome: 'Paulo', nota: 7.5},
    {nome: 'Pedro', nota: 6.7},
]
const somaNotas = estudantes.reduce((acumulador, estudante) => {
    soma = acumulador + estudante.nota
    return soma
}, 0)
const media = somaNotas / estudantes.length
console.log(media.toFixed(2))
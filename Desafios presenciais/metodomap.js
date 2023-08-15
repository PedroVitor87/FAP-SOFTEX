//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => {
    return valor * 2;
})
//console.log(numerosEmDobro)
//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adcione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Leticia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },    
]
const nomes = pessoas.map(obj =>{
    return obj.nome;
})
const idades = pessoas.map(obj => {
    //Duas maneiras para fazer isso
    //delete obj.nome ou
    return {idade: obj.idade};
})
const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj} //Spread so copia o array não altera
    newObj.id = (indice + 1);
    return newObj;
    //Mexeu no objeto original, para não alterar é preciso criar novo obj
})
console.log(nomes, idades, comIds)
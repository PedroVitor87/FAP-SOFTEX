const pessoas = [
    {
        nome: "Pedro Vitor",
        idade: 20,
        profissao: "Desenvolvedor WEB",
        cidade: "Dormentes"
    },
    {
        nome: "Bob",
        idade: 25,
        profissao: "Designer",
        cidade: "Rio de Janeiro"
    },
];

// Usando for...in para iterar sobre o array de objetos
console.log("Usando for...in:");
for (const indice in pessoas) { //Mostra o indice
    console.log(`Detalhes da Pessoa ${parseInt(indice) + 1}:`);
    const pessoa = pessoas[indice];//Declara variável
    for (const atributo in pessoa) { //Itera sobre os valores do indice
        console.log(`${atributo}: ${pessoa[atributo]}`);
    }
    console.log(""); //Adiciona uma linha em branco entre cada pessoa
}

// Usando for...of para iterar sobre o array de objetos
console.log("Usando for...of:");
for (const pessoa of pessoas) {
    console.log("Detalhes da Pessoa:");
    for (const atributo in pessoa) {
        console.log(`${atributo}: ${pessoa[atributo]}`);
    }
    console.log(""); // Adiciona uma linha em branco entre cada pessoa
}
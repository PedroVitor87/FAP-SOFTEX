//Criando um Map para armazenar os participantes e sua pontuação
const tiroAoAlvo = new Map();

//Adcionando os participantes e sua pontuação
//"set" adciona chaves valor ao Map
tiroAoAlvo.set("João", "Pontuação: 50");
tiroAoAlvo.set("Pedro", "Pontuação: 120");
tiroAoAlvo.set("Luiza", "Pontuação: 70");
tiroAoAlvo.set("Marcela", "Pontuação: 10");
tiroAoAlvo.set("Yuri,", "Pontuação: 34");

//Exibindo o Map completo no console
console.log(tiroAoAlvo)

//Conferindo se o item tem no Map
console.log(tiroAoAlvo.has("Pedro")); //"has" verifica a existência de uma chave

//Retorna o valor da chave
console.log(tiroAoAlvo.get("João")); //"get" busca os valores a partir de sua chave
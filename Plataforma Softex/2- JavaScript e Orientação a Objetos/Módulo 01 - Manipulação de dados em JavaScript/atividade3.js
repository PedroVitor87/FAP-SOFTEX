//Declarando variáveis de tipo Undefined
let tipoBoolean;
let tipoBigInt;
let tipoString;
let tipoSymbol;
//Exibindo conteúdos das variável undefined
console.log('Exibindo conteúdo das variáveis undefined');
console.log(tipoBoolean);
console.log(tipoBigInt);
console.log(tipoString);
console.log(tipoSymbol);
//Atribuindo valores nulos a essas variáveis
tipoBoolean = null
tipoBigInt = null
tipoString = null
tipoSymbol = null
//Exibindo o tipo e conteúdos das variáveis com valores nulos
console.log('Exibindo conteúdo das variáveis com valores nulos');
console.log(tipoBoolean);
console.log(tipoBigInt);
console.log(tipoString);
console.log(tipoSymbol);
//Declarando variáveis com seus valores
tipoBoolean = true;
tipoBigInt = 5478;
tipoString = 'Olá mundo';
tipoSymbol = Symbol ();
//Exibindo o tipo e conteúdos das variáveis com valores nulos
console.log('Exibindo conteúdo das variáveis com valores');
console.log('Tipo:', typeof tipoBoolean, 'Valor:', tipoBoolean);
console.log('Tipo:', typeof tipoBigInt, 'Valor:', tipoBigInt);
console.log('Tipo:', typeof tipoString, 'Valor:', tipoString);
console.log('Tipo:', typeof tipoSymbol, 'Valor:', tipoSymbol);
//Programa que converta a temperatura em Fahrenheit para graus Celsius

temperaturafa = Number(prompt("Digite a temperatura em Fahrenheit para a conversão em Celsius: "))
temperaturacel = ((temperaturafa - 32) * 5) / 9
console.log("A temperatura convertida em graus Celsius é:", temperaturacel.toFixed(2),"°C") 
//toFixed é para arredondar o valor e o valor entre parenteses é para a quantidade casa decimais desejada
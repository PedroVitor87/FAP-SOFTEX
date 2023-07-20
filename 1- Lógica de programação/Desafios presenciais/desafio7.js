//Script de  reajuste salario e mais informações

salario = Number(prompt("Digite o seu salário atual: "))

if(salario <= 280){
    percentual = "20%"
    aumento = salario + (salario * 0.2)
    valordeaumento = aumento - salario
}else if(salario > 280 && salario <= 700){
    percentual = "15%"
    aumento = salario + (salario * 0.15)
    valordeaumento = aumento - salario
}else if(salario > 700 && salario <= 1500){
    percentual = "10%"
    aumento = salario + (salario * 0.1)
    valordeaumento = aumento - salario
}else{
    percentual = "5%"
    aumento = salario + (salario * 0.05)
    valordeaumento = aumento - salario
}

console.log("Salário antes do reajuste: R$", salario.toFixed(2))
console.log("Percentual do aumento aplicado: ", percentual)
console.log("Valor do aumento salarial: R$", valordeaumento.toFixed(2))
console.log("Valor do salário após reajuste: R$", aumento.toFixed(2))
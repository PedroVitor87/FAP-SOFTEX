//Sistema de Gastos Familiar
let gastos = {
    receitas : [10, 50, 62],
    despesas : [50, 5, 10],
}
let saldo
const valores = (receitas, despesas) => {
    let receita_total = 0
    let despesa_total = 0
    for (let i = 0; i < receitas.length; i += 1){
        receita_total += receitas[i]
    }
    for(let i = 0; i < despesas.length; i += 1){
        despesa_total += despesas[i]
    }
    saldo = receita_total - despesa_total
    if(saldo >= 0){
        return 'positivo'
    }else{
        return 'negativo'
    }
}

console.log(`Saldo: ${calculo(gastos.receitas, gastos.despesas)}, Saldo Final: R$${saldo}`)
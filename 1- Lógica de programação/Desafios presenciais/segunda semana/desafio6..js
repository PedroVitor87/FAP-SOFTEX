//Função de retorno de investimento em juros compostos
function retornoInvestimento(){
    taxadecimal = jurosMensal / 100 //Transformação para número decimal
    montante = capinicial * (1+taxadecimal) ** tempo //Fórmula da função
    console.log(`O montante após o período investido é de R$ ${montante.toFixed(2)}`)
}
capinicial = Number(prompt("Digite o valor investido: "))
jurosMensal = Number(prompt("Digite a taxa de juros em porcentagem: "))
tempo = Number(prompt("Digite o tempo de investimento:  "))
retornoInvestimento()
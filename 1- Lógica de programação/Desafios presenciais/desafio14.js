//Função que calcula a área de um triângulo a partir de valores de base e altura fornecida pelo usuário
function areaTriangulo(){
    area = (base * altura) / 2
    console.log(`Área do triângulo: ${area}`)
}

base = Number(prompt("Digite a base do Triângulo: "))
altura = Number(prompt("Digite a altura do Triângulo: "))
areaTriangulo() //Chamando a função

let nomePessoas = ['Gabriela', 'Lucas', 'Clarice', 'Rodrigo', 'Pedro', 'Samira', 'Vitor', 'Paulo', 'Claudia', 'Jaqueline']
let idades = [20, 25, 18, 26, 30, 20, 21, 20, 42, 29]
let corFavorita = ['Azul', 'Verde', 'Branco', 'Marrom', 'Preto', 'Branco', 'Cinza', 'Verde', 'Rosa', 'Vermelho']
console.log(nomePessoas)
console.log('Array de idades ainda sem alterações')
console.log(idades)
console.log('Array de idades depois das alterações')
idades.splice(9, 1, 21)
console.log(idades)
console.log('Array de Cores favoritas ainda sem alterações')
console.log(corFavorita)
console.log('Array de Cores favoritas depois das alterações')
corFavorita.splice(0, 1, 'Preto')
console.log(corFavorita)
const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

function buscaLinear(array, elementoBuscado) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == elementoBuscado) {
            console.log(`O elemento buscado se encontra no índice ${i}`);
            return i;
        }
    }
    console.log('O elemento buscado não foi encontrado no array.');
}

buscaLinear(array, 20);
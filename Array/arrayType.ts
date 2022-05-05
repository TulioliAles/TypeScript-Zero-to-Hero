// ==> Exemplo 1 - Uso de Colchetes:
let frutas: string[] = ['abacaxi', 'maçã', 'pera', 'laranja', 'uva'];
console.log(frutas[2]);

// ==> Exemplo 2 - Array Object:
let frutas2: Array<string> = ['abacaxi', 'maçã', 'pera', 'laranja', 'uva'];
console.log(frutas2[3]);

// ==> Exemplo 3 - Adicionando string com método 'push':
let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);

idiomas.push('Mandarin');
console.log(idiomas);

idiomas.push('Italiano');
console.log(idiomas);

// ==> Exemplo 4 - Tamanho do Array
let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);

// ==> Exemplo 5 - Exemplo com Spread Operator
let listaNumeros: Array<number> = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];

console.log(listaNumeros);

// ==> Exemplo 6 - Exemplo com laço de iteração
let linguagensArray: Array<string> = ['Python', 'C#', 'Ruby', 'Javascript'];

function funcaoLinguagens(linguagem:string[]) {
    for (let i = 0; i < linguagem.length; i++) {
        console.log(linguagensArray[i]);
    }
}

funcaoLinguagens(linguagensArray);
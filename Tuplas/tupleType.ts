// ==> Exemplo 1 - Uso simples de Tupla
let pessoa: [string, string, number];

pessoa = ['Alessandro Tulioli', 'Desenvolvedor', 44];

console.log(pessoa);

// ==> Exemplo 2 - Acessando valor da Tupla
let pessoa1: [string, string, number];

pessoa1 = ['Alessandro Tulioli', 'Desenvolvedor', 44];

console.log(pessoa1[1]);

// ==> Exemplo 3 - Outra forma de usar Tuplas (com labels)
let pessoa2: [nome: string, profissao: string, idade: number] = ['Alessandro Tulioli', 'Desenvolvedor', 44];

console.log(pessoa2);

// ==> Exemplo 4 - Uso de Tuplas com Spread Operator
let listaFrutas: [string, ...string[]] = ['Laranja', 'Uva', 'Maçã', 'Abacaxi', 'Pera'];

console.log(...listaFrutas);

listaFrutas.push('Banana');

console.log(...listaFrutas);
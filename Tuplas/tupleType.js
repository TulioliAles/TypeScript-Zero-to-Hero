// ==> Exemplo 1 - Uso simples de Tupla
var pessoa;
pessoa = ['Alessandro Tulioli', 'Desenvolvedor', 44];
console.log(pessoa);
// ==> Exemplo 2 - Acessando valor da Tupla
var pessoa1;
pessoa1 = ['Alessandro Tulioli', 'Desenvolvedor', 44];
console.log(pessoa1[1]);
// ==> Exemplo 3 - Outra forma de usar Tuplas (com labels)
var pessoa2 = ['Alessandro Tulioli', 'Desenvolvedor', 44];
console.log(pessoa2);
// ==> Exemplo 4 - Uso de Tuplas com Spread Operator
var listaFrutas = ['Laranja', 'Uva', 'Maçã', 'Abacaxi', 'Pera'];
console.log.apply(console, listaFrutas);
listaFrutas.push('Banana');
console.log.apply(console, listaFrutas);

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// ==> Exemplo 5 - Uso de função com Tupla
function listarPessoas(nomes, idades) {
    return __spreadArray(__spreadArray([], nomes, true), idades, true);
}
var resultado = listarPessoas(['Alessandro', 'Thiago'], [44, 14]);
console.log(resultado);
function criarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArray([], nome, true);
}
console.log(criarPessoa('Jorge', 'Silva'));
console.log(criarPessoa('Jorge', 'Tadeu', 'Silva'));

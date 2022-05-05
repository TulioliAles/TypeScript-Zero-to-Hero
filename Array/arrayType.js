var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ==> Exemplo 1 - Uso de Colchetes:
var frutas = ['abacaxi', 'maçã', 'pera', 'laranja', 'uva'];
console.log(frutas[2]);
// ==> Exemplo 2 - Array Object:
var frutas2 = ['abacaxi', 'maçã', 'pera', 'laranja', 'uva'];
console.log(frutas2[3]);
// ==> Exemplo 3 - Adicionando string com método 'push':
var idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Mandarin');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);
// ==> Exemplo 4 - Tamanho do Array
var idiomas1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);
// ==> Exemplo 5 - Exemplo com Spread Operator
var listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = __spreadArray(__spreadArray([], listaNumeros, true), [6, 7, 8, 9, 10], false);
console.log(listaNumeros);
// ==> Exemplo 6 - Exemplo com laço de iteração
var linguagensArray = ['Python', 'C#', 'Ruby', 'Javascript'];
function funcaoLinguagens(linguagem) {
    for (var i = 0; i < linguagem.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);

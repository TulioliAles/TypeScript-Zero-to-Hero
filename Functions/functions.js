// ==> Exemplo 1 - Funcão (Named Function)
function somaNumeros(num1, num2) {
    return num1 + num2;
}
var total = somaNumeros(44, 33);
console.log(total);
// ==> Exemplo 2 - Função anônima (Function Expression)
var saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('Hello Developers!'));
// ==> Exemplo 3 - Arrow Function
var saudar2 = function (mensagem) {
    return mensagem;
};
console.log(saudar2('Fala, Dev!'));
// ==> Exemplo 4 - Function constructor
var saudar3 = new Function('mensagem', 'return "Fala " + mensagem');
console.log(saudar3('Galera!'));

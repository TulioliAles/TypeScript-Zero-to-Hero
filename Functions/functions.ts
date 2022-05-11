// ==> Exemplo 1 - Funcão (Named Function)
function somaNumeros(num1: number, num2: number) : number{
    return num1 + num2;
}

let total = somaNumeros(44, 33);
console.log(total);

// ==> Exemplo 2 - Função anônima (Function Expression)
const saudar = function(mensagem: string){
    return mensagem;
}

console.log(saudar('Hello Developers!'));

// ==> Exemplo 3 - Arrow Function
const saudar2 = (mensagem: string) => {
    return mensagem;
}

console.log(saudar2('Fala, Dev!'));

// ==> Exemplo 4 - Function constructor
const saudar3 = new Function('mensagem', 'return "Fala " + mensagem');

console.log(saudar3('Galera!'));
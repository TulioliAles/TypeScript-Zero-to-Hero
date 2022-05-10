// ==> Exemplo 1: Numeric Enum
enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
    Japones
}

console.log(Idioma);

// ==> Exemplo 2: String Enum (não indicado)
enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}

console.log(Dia.Quinta);
console.log(Dia);
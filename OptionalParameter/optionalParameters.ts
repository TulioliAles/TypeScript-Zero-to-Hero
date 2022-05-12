// ==> Exemplo 1 - Optional Parameter
function informarDadosPessoa(id: number, nome: string, email?: string){

    console.log('Id:', id, 'Nome:', nome);

    if (email != undefined) {
        console.log('Email:', email);
    }
}

informarDadosPessoa(77, 'Alessandro');
informarDadosPessoa(77, 'Alessandro', 'alessandro@email.com');

// ==> Exemplo 2 - Optional Parameter
function mensagemLog(mensagem: string, idUsuario?: number){
    
    const horaAtual = new Date().toLocaleDateString();

    console.log(horaAtual, mensagem, idUsuario || 'Usuário não conectado!');
}   

mensagemLog('Atualizar página');
mensagemLog('Usuario logado com sucesso', 778841);

// ==> Exemplo 3 - Optional Parameter
type Pessoa = {
    idFuncionario: number,
    nome: string,
    idade?: number,
    email?: string
};

let funcionario: Pessoa;

funcionario = {
    idFuncionario: 541122,
    nome: 'Alessandro'
}

console.log(funcionario);
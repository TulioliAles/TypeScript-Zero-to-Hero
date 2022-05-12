// ==> Exemplo 1 - Optional Parameter
function informarDadosPessoa(id, nome, email) {
    console.log('Id:', id, 'Nome:', nome);
    if (email != undefined) {
        console.log('Email:', email);
    }
}
informarDadosPessoa(77, 'Alessandro');
informarDadosPessoa(77, 'Alessandro', 'alessandro@email.com');
// ==> Exemplo 2 - Optional Parameter
function mensagemLog(mensagem, idUsuario) {
    var horaAtual = new Date().toLocaleDateString();
    console.log(horaAtual, mensagem, idUsuario || 'Usuário não conectado!');
}
mensagemLog('Atualizar página');
mensagemLog('Usuario logado com sucesso', 778841);
var funcionario;
funcionario = {
    idFuncionario: 541122,
    nome: 'Alessandro'
};
console.log(funcionario);

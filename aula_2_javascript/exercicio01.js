const cpf = "000333444-55";
var nome = "Jurandir";

//variáveis de escopo fica dentro da função
function exibirSobreNome() {
    let sobrenome = "do Sax";
    return sobrenome;
}

console.log (`${nome}. ${exibirSobreNome()}. cpf: ${cpf}`);

const notas = [9.5 , 7.5 , 8.0];
let media = ((notas[0] + notas[1] + notas[2])/notas.length).toFixed(1)
const mediaDeAprovacao = 7.0;

if (media >= mediaDeAprovacao) {
    statusAprovacao = "Aprovado"

}else{
    statusAprovacao = "Reprovado"
}


console.log(`As 3 notas do aluno é: ${notas} e a média do aluno é ${media}. O aluno foi ${statusAprovacao}`)
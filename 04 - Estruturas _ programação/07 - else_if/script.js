// let Aluno = prompt()

// if(Aluno >= 7) {
//     console.log("Aprovado")
// }else if(aluno >=5){
//     console.log("Não Aprovado")
// }else{
//     console.log("Não Aprovado")
// }

let nota1 = parseFloat(prompt("Digite sua nota 01: "))
let nota2 = parseFloat(prompt("Digite sua nota 02 "))
let nota3 = parseFloat(prompt("Digite sua nota 03 "))
let nota4 = parseFloat(prompt("Digite sua nota 04 "))

let media = ((nota1 + nota2 + nota3 + nota4) / 4)

if (media >=7){
    console.log(`Aprovado! Nota Final: ${media.toFixed(2)}`);
}else if (media >= 5){
    console.log(`Recuperação! Nota Final ${media.toFixed(2)}`);
}else{
    console.log(`Reprovado! Nota Final ${media.toFixed(2)}`)
}


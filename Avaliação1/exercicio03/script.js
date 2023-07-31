//03- Imagine que você é um professor e precisa calcular a média final das notas de um aluno. Escreva um programa que solicite ao usuário que informe as 4 notas do aluno utilizando a função prompt. Em seguida, calcule a média final e exiba uma mensagem de alerta contendo o valor da média final. 

let nota1 = Number(prompt("Digite a nota aqui;"))
let nota2 = Number(prompt("Digite a nota aqui;"))
let nota3 = Number(prompt("Digite a nota aqui;"))
let nota4 = Number(prompt("Digite a nota aqui;"))

let notaFinal = ((nota1+nota2+nota3+nota4)  /4)

alert(notaFinal)
//07 - Imagine que você precisa verificar se um número é positivo, negativo ou zero. Escreva um programa que solicite ao usuário que informe um número utilizando a função prompt. Utilize a estrutura condicional if, else if e else para verificar se o número é positivo, negativo ou zero e exibir uma mensagem correspondente no console. 

let n = Number(prompt("Digite um valor: "))

if(n> 0){
    console.log("Positivo")
}else if(n<0){
    console.log("negativo")
}else {
    console.log( "O número é zero")
}
//02 - Imagine que você está indo ao supermercado e precisa fazer algumas operações matemáticas. Escreva um programa que defina duas variáveis numéricas representando o valor total das suas compras e o valor que você tem disponível para gastar. Em seguida, realize as operações de soma, subtração, multiplicação, divisão entre elas e exiba o resultado de cada operação no console. 

let n1 = Number(prompt("Digite o valor que tem para gastar: "))
let n2 = Number(prompt("Digite o valor total das compras "))


console.log(`${n1} + ${n2} = `, n1+n2)
console.log(`${n1} - ${n2} = `, n1-n2)
console.log(`${n1} * ${n2} = `, n1*n2)
console.log(`${n1} / ${n2} = `, n1/n2)
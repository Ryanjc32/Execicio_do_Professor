// imprir no console os numeros de 1 até 5

// let numero = parseFloat(prompt("Digite um numero: "))

// for (let i = numero; i >= 0; i--){
//     console.log(i)

// }

//Imprima os números de 1 a 10 no console

// for(let i =1; i<=10; i++){
//     console.log(i)
// }

//Imprima os números pares de 0 a 20 

// for(let i = 1;i <=20; i+=2){
//     console.log(i)
// }

//Imprima os números ímpares de 10 a 30 no console

// for(let i =10; i<=30; i++)
//     if(i%2==1)
//     console.log(i);


//Imprima os numeros de 100 a 0 decrementando de 5 em 5,no console

// for(let i =100; i>=0; i-=5){
//     console.log(i)
// }

//Imprima atabuada de multiplicação do numero 7, do 1 e do 10,no console


// let n = 7


// for(let i = 1; i <=10; i++){
//     console.log(`${n} X ${i} = ${n*i}`)
// }


//Digite um numero e em seguida imprima os numeros pares de 0 até esse numero no console

// let n = parseInt(prompt('Digite um numero: '))

// for(let i = 0; i <= n ; i+=2){
//     console.log(i)
// }





//Solicite ao usuário que digite dois numeros e, em seguida, imprima os numeros entre esses números no console, em ordem crescente

// const n1 = parseInt(prompt("Digite um número"))
// const n2 = parseInt(prompt("Digite um número"))

// if(n1 < n2){
//     for(let i =n1; i<=n2; i++ ){
//         console.log(i)
//     }   
// }else if(n1 > n2){
//     alert("O primeiro número deve ser maior que o segundo")
// }

//Desenvolva um programa que solicite ao usúario que digite um numero e, em seguida, imprima no console a soma dos numeros ímpares entre 1 e esse número

 let numero = prompt("Digite um múmero")
 let soma = 0

for (let i = 1; i <= numero ;i+=2){
    soma+=i
 
    }
    
 console.log(`A soma dos números ímpares entre 1 e ${numero} é ${soma}`)



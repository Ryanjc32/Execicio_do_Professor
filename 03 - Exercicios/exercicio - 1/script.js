console.log("Hello World");
console.log('Meu nome é Sr.Madrugada');
console.log(`Este aqui é o template literals`);


let nome = "Ryan";
let idade = 18;
let resultado = " Meu nome é: " + nome + " Minha idade é: " + idade;

console.log(resultado);
//acima foi feito uma interpolação patra chamar as variaveis juntas 

console.log(nome + idade);

console.log (" Meu nome é: " + nome + " Minha idade é: " + idade);

// Acima foi feito uma concatenação para chamar as duas variaveis juntas 

console.log(`Meu nome é: ${nome} Minha idade é:  ${idade}`);

//Crase serve para chamar a variavel de um jeito mas simples sem ter que usar o sinal "+" e sim usar o cifrão "$"

let nome1 = prompt();
alert(`O nome digitado foi ${nome1}`);

//EX. 01

/*let diaDaSemana = parseInt(prompt("Digite um numero do dia da semana: "))

switch(diaDaSemana){
    case 1:
        alert("Segunda-Feira");
        break;

    case 2:
        alert("Terça-Feira");
        break;

    case 3:
        alert("Quarta-Feira");
        break;

    case 4:
        alert("Quinta-Feira");
        break;

    case 5:
        alert("Sexta-Feira");
        break;

    default:
        alert("Fim de Semana")    


}*/


//Ex .02


/*let nomeDaFruta = prompt();

switch(nomeDaFruta){
    case "limão":
    case "Uva":
    case "laranja":
        console.log("Essas frutas são cítricas");
        break;
    case "abacate":
    case "manga":
        console.log("Essas frutas são tropicais");
    break;
    default:
        console.log("Não qual é esse tipo de fruta")    
}*/


//Crie um programa que solicite ao usúario que insira dois números e selecione uma operação(soma,subtração, multiplicação ou divisaõ). use um switch para selecionar a operação apropriada com base na entreda do usúario e exiba o resultado no console.


/*let n1 = parseFloat(prompt("Digite um número: "));
let n2 = parseFloat(prompt("Digite um número: "));

let operação = prompt("Digite um operação \n+ Soma \n- Subtração \n* Multiplicação \n/ Divisão");


switch(operação){
    case "+": 
         console.log(`${n1} + ${n2} = `, n1 + n2)
        break;
    case "-":
        console.log(`${n1} - ${n2} = `, n1 - n2)
        break;
    case "*":
        console.log(`${n1} * ${n2} = `, n1 * n2)
        break;
    case "/":

    
           console.log(`${n1} / ${n2} = `, n1 / n2)
          
          break;
          default:
            console.log("Esta operação não existe")
    
}
*/


    /**
 * Escreva um programa em JavaScript que solicite ao usuário que insira um número e verifique se ele é positivo, negativo ou zero. Se o número for maior que zero, o programa deve exibir "O número é positivo". Se o número for menor que zero, o programa deve exibir "O número é negativo". Se o número for igual a zero, o programa deve exibir "O número é zero". Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".
Para implementar a verificação, utilize um switch statement. O programa deve seguir a seguinte estrutura:
Solicitar ao usuário que insira um número.
Verificar se o número é positivo, negativo ou zero utilizando um switch statement.
Exibir a mensagem correspondente ao tipo de número.
Se a entrada do usuário não for um número válido, exibir "Entrada inválida".
 */

/*let n1 = Number(prompt("Digite um número: "))

switch(true){
    case n1 > 0 :
    console.log("O número é positivo")
    break;
    case n1 < 0 :
        console.log("O número é negativo")
        break;
    case n1 == 0:
    console.log("O número é  zero")
    break;
    default:
        console.log("Entrada inválida")

}*/


/*Escreva um programa em JavaScript que solicite ao usuário que insira um número correspondente ao dia da semana (1-7) e exiba o nome do dia da semana correspondente à entrada do usuário. Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".
 
Para implementar a verificação do nome do dia da semana, utilize um switch statement. O programa deve seguir a seguinte estrutura:
 
Solicitar ao usuário que insira um número correspondente ao dia da semana (1-7).
Verificar qual é o número inserido pelo usuário e exibir o nome do dia da semana correspondente utilizando um switch statement.
Se a entrada do usuário não for um número válido, exibir "Entrada inválida".
 */

/*let n = Number(prompt("Escreva um número que corresponde a um dia da semana: "))

switch(n){

case 1:
    console.log("Segunda-Feira");
    break;

case 2:
    console.log("Terça-Feira");
    break;

case 3:
    console.log("Quarta-Feira");
    break;

case 4:
    console.log("Quinta-Feira");
    break;

case 5:
    console.log("Sexta-Feira");
    break;
case 6:
    console.log("Sábado");
    break;
case 7:
    console.log("Domingo");
    break;

default:
    console.log("Entrada inválida")    
}
*/


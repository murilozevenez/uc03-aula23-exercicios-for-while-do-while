//Crie um programa que peça 5 nomes diferentes e imprima na tela logo após o nome ser informado.
//const readline = require('readline-sync');




//for (i = 1; i <=5; i++) {
    //todos = readline.question("Informe um nome"); 
    //console.log(todos)
//}


// Crie um programa que executa 10 vezes um bloco de código, onde é solicitado um valor numérico inteiro. Caso o valor informado seja impar,
// imprima impar no console, caso seja par, imprima par no console.
//const readline = require('readline-sync');

//for (i = 1; i <=10; i++) {
    //const numero = readline.questionInt("informe um numero: ")
    //if (numero/2==0 ){
        //console.log (`${numero} é par`)
   //} //else {
        //console.log (`${numero} é impar`)
    //}
    
//}    

//Imprima a tabuada de um número informado usando o while.
//const readline = require('readline-sync');

//const numeroTabuada = readline.questionInt('Informe um numero inteiro para mostrar a tabuada');

//let vez = 1;

//while (vez <=10) {
    //const resultado =  vez * numeroTabuada;
    //console.log (`${numeroTabuada} x ${vez} = ${resultado}`);
    //vez++;
//}

//Imprima todos os valores impares entre 1 e 100 usando for;

const readline = require('readline-sync');

for (let i = 1; i <= 100; i++) {
    if (i % 2 > 0) {
        console.log(i)
    }
}
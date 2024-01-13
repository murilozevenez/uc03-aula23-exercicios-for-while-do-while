// for - para (inicialização var controle; condição; incremento)
// while - enquanto (condição verdadeira)
// do while - faça enquanto (condição verdadeira)

// while deve ser usado quanfo não temos certeza da condição e
//não precisamos executar pelo menos 1 vez

//do while vai ser executado pelo menos 1 vez para poder validar a condição

const readline = require('readline-sync');

//const valor = readline.questionInt("Informe um numero inteiro: ")

//while (valor > 0 ) {
    //console.log ("Valor maior que zero");
    //break;
//}

const senha = '123456';
let senhaValida = false; //flag
let vezes = 0;

do {
    const senhaDigitada = readline.question("Informe a senha: ")
    if (senha === senhaDigitada) {
        senhaValida = true;
    }
} while(!senhaValida)
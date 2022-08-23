const number1 = Number(prompt('Insira um número:'));
const number2 = Number(prompt('Insira outro número:'));

function somarNumeros(n1, n2){
    return n1 + n2
}

console.log(`Resultado da soma dos números: ${somarNumeros(number1, number2)}`);

function compararNumeros(n1, n2){
    return n1 >= n2
}

console.log(`O primeiro número é maior que o segundo? Resposta: ${compararNumeros(number1, number2)}`);

function numeroPar(n){
    return n % 2 === 0
}

console.log(`O primeiro número é par? Resposta: ${numeroPar(number1)} \nO segundo número é par? Resposta: ${numeroPar(number2)}`);

function recebeMensagem(string){
    let tamanho = string.length
    let letrasMaiusculas = string.toUpperCase()
    return (`Tamanho da mensagem: ${tamanho} caracteres. \nVersão maiúscula: ${letrasMaiusculas}.`)
}

console.log(recebeMensagem("macaco"));
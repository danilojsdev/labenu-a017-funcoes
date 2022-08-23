const num1 = +prompt("Insira um número:");
const num2 = +prompt("Insira outro número:");

const somaNumeros = (n1, n2) => {
    return n1 + n2
}

const subNumeros = (n1, n2) => {
    return n1 - n2
}

const multNumeros = function (n1, n2){
    return n1 * n2
}

const divNumeros = function (n1, n2){
    return n1 / n2
}

console.log(`Resultado da soma: ${somaNumeros(num1, num2)}. \nResultado da subtração: ${subNumeros(num1, num2)}. \nResultado da multiplicação: ${multNumeros(num1, num2)}. \nResultado da divisão: ${divNumeros(num1, num2)}.`);
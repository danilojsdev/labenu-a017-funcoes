function divisor(params = 30) {
    console.log("#".repeat(params))
}

function seuNome(){
    console.log(`Olá ${prompt("Escreva seu nome:")}!`)
}

function imprimirTabuada(tabuada){      
    for (let i = 1; i < 11; i++){
        console.log(`${tabuada} X ${i} = ${tabuada * i}`)
    }
}

// ARRAY FUNCTION
// const seuNome = () => {
//     console.log(`Olá ${prompt("Escreva seu nome:")}!`)
// }

// EXPRESSÃO DE FUNÇÃO
// const seuNome = function(){
//     console.log(`Olá ${prompt("Escreva seu nome:")}!`)
// }

// ARRAY FUNCTION
// const imprimirTabuada = (tabuada) => {      
//     for (let i = 1; i < 11; i++){
//         console.log(`${tabuada} X ${i} = ${tabuada * i}`)
//     }
// }

// EXPRESSÃO DE FUNÇÃO
// const imprimirTabuada = function(tabuada){      
//     for (let i = 1; i < 11; i++){
//         console.log(`${tabuada} X ${i} = ${tabuada * i}`)
//     }
// }

seuNome();
divisor();
imprimirTabuada(6);
divisor();
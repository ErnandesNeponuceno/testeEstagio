////////////////////// TESTE 01 ///////////////////////////


let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
}

console.log(soma);

// RESULTADO = 91

////////////////////// TESTE 02 ///////////////////////////

function isFibonacci(number) {
    let a = 0;
    let b = 1;
    
    while (a <= number) {
        if (a === number) {
            return true;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    return false;
}

// Número para verificar se pertence à sequência de Fibonacci
const numero = 14;

if (isFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}

////////////////////// TESTE 03 ///////////////////////////

// a) 1, 3, 5, 7, ___9

// b) 2, 4, 8, 16, 32, 64, ____128

// c) 0, 1, 4, 9, 16, 25, 36, ____49

// d) 4, 16, 36, 64, ____100

// e) 1, 1, 2, 3, 5, 8, ____13

// f) 2,10, 12, 16, 17, 18, 19, ____200


////////////////////// TESTE 04 ///////////////////////////


/// TOCANDO NA LAMPADA E OBSERVANDO A TEMPERATURA



////////////////////// TESTE 05 ///////////////////////////

function inverterString(str) {
    let invertedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }
    return invertedStr;
}

// String a ser invertida
const minhaString = "Hello, world!";

// Chamada da função para inverter a string
const stringInvertida = inverterString(minhaString);

console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);

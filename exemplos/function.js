"use strict";
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function divideEleMesmo(numero) {
    return numero / numero;
}
// callback: (numero: number) => number
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, divideEleMesmo));

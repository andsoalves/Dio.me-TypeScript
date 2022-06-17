"use strict";
let botton = document.getElementById('botton');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let teste = 0;
function adicionarNumero(parametro1, parametro2, devePrintar, frase) {
    let resultado = parametro1 + parametro2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return parametro1 + parametro2;
}
let devePrintar = true;
const frase = 'O Valor é ';
if (botton) {
    botton.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}

"use strict";
function somarValores(parametro1, parametro2) {
    if (typeof parametro1 === 'string' || typeof parametro2 === 'string') {
        return parametro1.toString() + parametro2.toString();
    }
    else {
        return parametro1 + parametro2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('ola ', ' tudo bem ?'));
console.log(somarValores('que dia é e hoje ', 5));

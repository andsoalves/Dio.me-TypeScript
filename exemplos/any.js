"use strict";
let valorAny;
valorAny = 1;
valorAny = '1';
valorAny = true;
let valorStringSem = 23; // o ts pode automaticamente cassificar e dar um tipo para a variavel 
let valorString = 'teste'; // o ts pode automaticamente cassificar e dar um tipo para a variavel 
valorString = valorAny;
let valorString2 = 'teeste2';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('ola ', 'como vai ?');

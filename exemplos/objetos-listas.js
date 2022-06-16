"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
};
pessoa.idade - 25;
//definir explicitamente o que o objeto tem
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
/// Enum eu consigo criar um atributo para uma propriedade, para evitar erros, ou diferenças
var profissao;
(function (profissao) {
    profissao[profissao["Professora"] = 0] = "Professora";
    profissao[profissao["Atriz"] = 1] = "Atriz";
    profissao[profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    profissao[profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(profissao || (profissao = {}));
let jose = {
    nome: 'Andre',
    idade: 25,
    profissao: profissao.JogadoraDeFutebol
};
const monica = {
    nome: 'monica',
    idade: 22,
    // profissao: profissao.JogadoraDeFutebol é opcional pq a propriedade tem ? na interface
    materias: ['Matematica', 'Portugues', 'ciencias']
};
const tereza = {
    nome: 'monica',
    idade: 22,
    // profissao: profissao.JogadoraDeFutebol é opcional pq a propriedade tem ? na interface
    materias: ['ed fisica', 'computacao', 'ciencias']
};
function listar(lista) {
    for (let estudos of lista) {
        console.log(' ', estudos);
    }
}
listar(monica.materias);
listar(tereza.materias);

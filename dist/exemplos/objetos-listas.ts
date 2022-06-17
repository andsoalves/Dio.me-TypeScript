const pessoa = { // objeto definido por inferencia
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
}
pessoa.idade - 25;

//definir explicitamente o que o objeto tem
const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao:'pintor'
}
/// Enum eu consigo criar um atributo para uma propriedade, para evitar erros, ou diferenças
enum profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}
///criando interface, eu consigo declarar o objeto e ja dar uma "classe para ele"
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: profissao
}

interface Estudante extends Pessoa {
    materias: string []
}

let jose: Pessoa = {
    nome: 'Andre',
    idade: 25,
    profissao: profissao.JogadoraDeFutebol
}
const monica: Estudante = {
    nome: 'monica',
    idade: 22,
    // profissao: profissao.JogadoraDeFutebol é opcional pq a propriedade tem ? na interface
    materias: ['Matematica','Portugues','ciencias']
}
const tereza: Estudante = {
    nome: 'monica',
    idade: 22,
    // profissao: profissao.JogadoraDeFutebol é opcional pq a propriedade tem ? na interface
     materias: ['ed fisica','computacao','ciencias']
}

function listar (lista: string[]){
    for (let estudos of lista) {
        console.log(' ', estudos);
    }
}
listar(monica.materias);
listar(tereza.materias);
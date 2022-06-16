let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;


let unknownVolta: unknown;
unknownVolta = 3;
unknownVolta = 'opa';
unknownVolta = true;
unknownVolta = 'vai sim';


let stringTest2: string = 'agora vai';
// stringTest2 = unknownVolta;



///tratamento para filtrar um objeto que tenha mais de um tipo, para utilizar apenas o tipo correto///
if (typeof unknownVolta === 'string') {
    stringTest2 = unknownVolta;
}
console.log(stringTest2)
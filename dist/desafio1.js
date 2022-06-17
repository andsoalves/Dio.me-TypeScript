"use strict";
// // Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";//
var funcioraio = {
    codigo: 10,
    nome: 'joao'
};
var pessoa = {
    codigo: 10,
    nome: "Maria"
};
var Cargos;
(function (Cargos) {
    Cargos[Cargos["gerente"] = 0] = "gerente";
    Cargos[Cargos["assistente"] = 1] = "assistente";
    Cargos[Cargos["diretor"] = 2] = "diretor";
    Cargos[Cargos["Vendedor"] = 3] = "Vendedor";
})(Cargos || (Cargos = {}));
var employee = {
    id: 1,
    nome: 'Maria',
    cargo: 'Vendedora'
};
var employee2 = {
    id: 2,
    nome: 'Jose',
    cargo: Cargos.gerente
};
var employee3 = {
    id: 3,
    nome: 'Jose',
    // cargo: Cargos.gerente
};
console.log(employee);
console.log(employee2);
console.log(employee3);
//# sourceMappingURL=desafio1.js.map
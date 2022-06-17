// // Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";//


const funcioraio: { codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

let pessoa = {
    codigo: 10,
    nome: "Maria"
}
enum Cargos {
    gerente,
    assistente,
    diretor,
    Vendedor
}
// quando tivermos muitos podedemos criar uma interface //

interface Funcionarios {
    id: number,
    nome: string,
    cargo: string
} 
interface chefes {
    id: number,
    nome: string,
    cargo?: Cargos
}
let employee: Funcionarios = {
    id: 1,
    nome: 'Maria',
    cargo: 'Vendedora'
}
let employee2: chefes = {
    id: 2,
    nome: 'Jose',
    cargo: Cargos.gerente
}
let employee3: chefes = {
    id: 3,
    nome: 'Jose',
    // cargo: Cargos.gerente

}
console.log(employee);
console.log(employee2);
console.log(employee3);

/*
Funções cidadãos  de primeira classe:
podem ser atribuidas a variáveis, passadas como parâmetros e retornadas de outras funções.
*/

const subtrair = (a,b)=> a-b; // função 1
const aplicaOperacao = (a, b, operacao) => operacao(a,b); // função 2

let resultado = aplicaOperacao( 4, 2, subtrair);
console.log(resultado);


// retorno de uma função

const somarx = (x) => (y) => x+y; // função 1 : (x), função 2 : (y)

const somar2 = somarx(2);

console.log(somar2(5));

/*
* Reduz vetor a um valor ou a um objeto.
* ex: somar todos os elementos de um vetor.
* variavel de estado.
*/

const vetor =[ 1 , 2, 3, 4, 5, 6];

const soma= vetor.reduce((estado, item) => estado+item, 0);

console.log(soma);
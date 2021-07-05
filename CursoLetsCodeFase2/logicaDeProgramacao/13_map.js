/*
* Manipulação de vetores.
* Para construir um novo vetor ou alterar um existente, normalmente precisamos.
* fazer um loop percorrer o vetor.
* a função map tira a necessidade deconstruir um loop para manipular um vetor.
* map é uma função específica de vetor que recebe uma função como parâmetro.
* essa função é responsavel por manipular os itens do vetor.
* pode ser construida com até três parâmetros.
  1 parâmetro: representa o valor do elemento do vetor.
  2 parâmetros: valor do elemento do vetor e sua posiçao.
  3 parâmetros: valor, posição e vetor inteiro.
*/

const vetor =["10", "20", "30"];
// x elemento do vetor
// parseInt() lê uma string e a converte para npumero.
const stringToInt = (x) => parseInt(x); 
const vetor2 = vetor.map(stringToInt);
console.log(vetor2)
const vetor3 = vetor2.map(x => x*x)
console.log(vetor3)





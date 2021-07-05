/*
* filter similar a map.
* retorna um valor veradeiro ou falso.
* verdadeiro mantém, falso descarta.
* filtra o vetor dada uma condição.
*/

const vetor = [1,2,3,4,5,6,7,8,9,10];
const pares = vetor.filter(x => x%2 ===0);
const pares2 = vetor.filter(function(x){return x%2==0});
console.log(pares)
console.log(pares2)

const vetor3 = vetor.filter(x=> x < 8)
console.log(vetor3)

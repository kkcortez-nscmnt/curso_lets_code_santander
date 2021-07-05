const vetor = [1, 2, 3, 4, 5, 6];
const soma = vetor.reduce((estado, item) => estado +item);
console.log(soma)
const soma2 = vetor.reduce((estado, item) => estado + item, 0);
console.log(soma2)





const vetor = [ 1, 2, 3, 4, 5, 6];
const dobro = (item) => 2*item
const vetorDobrado = vetor.map(dobro)
console.log(vetorDobrado)

// função que eleva ao quadrado
const aoQuadrado = (item,indice, vetor) => vetor[indice]*item;
console.log(aoQuadrado)

// é possivel escrever uma função diretamente dentro de map
const vetorTransformado = vetor.map((x)=>x+1);
console.log(vetorTransformado)

// o map exige que seja passado pelo menos um parâmetro para a função
const vetorl = ["a","b","c"];
const toUpper = (str) => str.toUpperCase();
const maiusculas = vetorl.map(toUpper);
console.log(maiusculas)

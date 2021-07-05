let vetor = [ 10, 20, 30, 40, 50, ];
vetor[2] = "trinta";
console.log(vetor[2]);
console.log(vetor);

// criação de um vetor vazio

let vetor2 = [];

for (let i=0; i<10; i++){
    vetor2.push(i); // adiciona um elemento ao final do vetor
}

console.log(vetor2);

// percorrendo um vetor

for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}

/* 
.push() adiciona um elemento ao final do vetor
.pop() remove um elemento d final do vetor
.unshift() adiciona um elemento no começo do vetor
.shift() remove um elemento do começo do vetor

*/

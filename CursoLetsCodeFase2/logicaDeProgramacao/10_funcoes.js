function escreva(texto){
    console.log(texto);
}

escreva("Meu primeiro parametro");

escreva("Meu segundo parametro");


function somar( a, b){
    return a+b;
}

let resultado = somar(1,3);
console.log(resultado);

// podemos armazenar uma função em uma variável através de uma funçao anonima.

const soma = function(a, b){return a +b};

console.log(soma(3,2))

// função de flecha

const s = (a,b) => a + b;
console.log(s(1,3));



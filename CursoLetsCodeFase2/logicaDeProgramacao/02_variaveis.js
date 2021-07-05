/*
A diferença entre declarar uma variável com var e com let:
Se quando declaramos uma variável com var, ela pode escapar de seu escopo de origem.

Ao usarmos let para declarar uma variável, ela não poderar existir fora de seu escopo.
Como boa pratica de programação, é recomendavel sempre usar let na declaração de variáveis.

tipos primitivos:
números(int, float)
string
boolean
*/
let a = 10; // inteiro
let b = 13.5;// float
let c = "texto"; // string
let d = false;  // boolean
let e = true ; // boolean 

// exemplo da dinamicidade de js
d = 15;

//salvando uma função dentro de uma variável

a = function(){};

let f;

console.log(f); // conole.log retorna undefined pois a variável não foi iniciada

// sequisermos que uma variável não guarde nenhuma informação, podemos definila como "vazia"

let g = null;

console.log(g)

// podemos declarar ainda uma constante.
// constantes não podem ser redefinidas.

const pi = 3.14;

console.log(pi)


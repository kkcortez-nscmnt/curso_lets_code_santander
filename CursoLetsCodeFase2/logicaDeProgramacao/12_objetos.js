/*
* Um objeto JS é um conjunto chave valor, similar a dicionários em python
*/

let pokemon = {
    nome: "Bulbassauro.",
    tipo: "planta"
};

// Acessando propiedades, duas formas equivalestes

console.log(pokemon.nome);
console.log(pokemon['nome']);

//Alterando propiedades
pokemon.nome ='Ivyssauro';
console.log(pokemon.nome);
console.log(pokemon['nome']);

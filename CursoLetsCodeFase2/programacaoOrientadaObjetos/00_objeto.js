/**
 * Estrutura de dados.
 * Objeto - Abstração funcional de um objeto real através de estrutura de dados.
 * Atributos (propiedade ou caracteristica) e métodos (trabalhos, tarefas, capacidade de atuação).
 * objetivo principal é organizar dados de modo a facilitar sua manipulação.
 * 
 * Normalmente, em outras linguages:
 * classe - a ideia do que é o objeto.
 * instância - objeto feito a partir de uma classe.
 * 
 * em JS podemos criar um objeto sem necessariamente criar uma classe
 */

const pessoa = {
    nome: 'jamilson',
    idade: '31',
};

console.log(pessoa.nome);

const quadrado ={
    base: 10,
    altura: 20,
    calculaArea: function(){return this.base*this.altura}
};

console.log(quadrado.calculaArea())


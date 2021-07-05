//classe construtora de objetos

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

//instânciamento

const pessoa1 = new Pessoa('Carlos', 20);
pessoa1.idade = 21;

console.log(pessoa1.idade)

const pessoa2 = new Pessoa('Jamilson', 32);
console.log(pessoa2)


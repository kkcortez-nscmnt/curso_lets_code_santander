/**
 * Herança e polimorfismo
 * 
 * Herança: atributos  herdados de outra classe.
 * Criação de uma classe, considerada "classe pai", em seguida, criação de uma "classe filha"
 * da qual herdará atributos e métodos dos pais.
 */

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;

    }
}

class Cidadao extends Pessoa{
    constructor(nome, idade, rg, cpf){
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao( "Jamilson", 26, 000, 111);
console.log(cidadao instanceof Pessoa);

/**
 * Pensando em objetos como tipos de dados, podemos afirmar que um objeto Cidadão tem dois tipo:
 * Pessoa
 * Cidadão.
 * Todo cidadão é pessoa, mas nem toda pessoa é cidadão.
 *
 * O conceito de polimorfismo é uma classe pai,  gerando várias classes filhas irmãs 
 *
 */
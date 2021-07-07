/**
 * As desvantagens de se usar método de acesso, é que eles devem ter o nome da propiedade.
 * Esse nome nao pode colidir com o nome de um atributo.
 * Em POO métodos permitem a aplicação de tudo o que é aplicado em lógica de programação.
 */

class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}

/**
 * Temos uma classe Quadrado que recebe base e altura por parâmetros e valida se ambos os valores
 * foram valores numéricos.
 * No entanto, cor não é passada como parâmetro, desta forma, não é testada como valida ou não.
 */
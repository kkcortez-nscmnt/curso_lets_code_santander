/**
 * Um método de acesso nos da a impressaçao de estarmos manipulando um atributo do objeto
 * quando na verdade estamos chamando um método.
 * Conceito de propiedade : soma do conceito de atributos e métodos de acesso.
 * sintetizando: uma propiedade é um atributo que tem métodos de acesso.
 */


class Quadrado{
    
    constructor(lado, altura){
        this. _cor = "blue"; // atributo especial. valor guardado temporariamente ( uso do _ underscore)
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor;}; // método de acesso a cor
        this.setCor = (c) => {cor = c;} // método de redefinição da cor
    }

    get cor() {return this._cor;}
    set cor(cor) { this._cor = cor;}
}

const quadrado = new Quadrado(3,4);
console.log(quadrado.cor)
quadrado.cor = 'red';
console.log(quadrado.cor)
console.log(quadrado)
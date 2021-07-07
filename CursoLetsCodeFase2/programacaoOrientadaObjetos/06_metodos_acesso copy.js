class Quadrado{
    
    constructor(lado, altura){
        let cor = "blue";
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor;}; // método de acesso a cor
        this.setCor = (c) => {cor = c;} // método de redefinição da cor
    }
}

quadrado = new Quadrado(3,4); // instânciamento
console.log(quadrado.getCor());
quadrado.setCor('red');
console.log(quadrado.getCor());
quadrado.cor = 'red' // isso deve ser impedido 
console.log(quadrado)


/**
 *  Esta maneira de acesso apresenta duas desvantagens:
 * Precisamos declarar todos os métodos dentro do construtor.
 * Não conseguimos impedir o usuário declarar cum novo atributo "cor" diretamente.
 */
/**
 * Encapsulamento é o ato de negar o acesso de leitura ou escrita de algum atributo da classe.
 * Propiedade privada da classe.
 */

// Desta forma não podemos acessar o atributo 

function Quadrado(base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'blue';
}

const quadrado = new Quadrado(3, 4); // instânciamento.
console.log(quadrado.cor)//retorna undefined devido ao escopo da variavel.
quadrado.cor ='red';
console.log(quadrado.cor);  // não acessamos let cor, criamos um novo artributo.


// desta forma podemos acessar o atributo protegido
// factory function
function criaQuadrado(base, altura){

    let cor = 'blue' ;

    return {
        base,
        altura,
        getCor: function(){return cor;} // cria um método que garante o acesso a cor
    };
}

const quadrado2 = criaQuadrado (3,4); 
quadrado.cor = 'red' // não mudou o atriuto, criou outro.
console.log(quadrado2.getCor());
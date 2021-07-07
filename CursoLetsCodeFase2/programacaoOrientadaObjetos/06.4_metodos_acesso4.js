class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam  ser números";
        this.base = base;
        this.altura = altura;
        this._cor = undefined;   
    }
    get cor() {return this._cor;}
    set cor(cor) {
        if(cor !== 'red' && cor !== 'green' &&  cor !== 'blue'){
            throw 'O valor da propiedade cor deve ser "red", "green" ou"blue".';

        }
        this._cor = cor;
    }
}


const quadrado = new Quadrado(3,4);
console.log(quadrado);
console.log(quadrado.cor);
quadrado.cor = 'red';
console.log(quadrado.cor);
quadrado.cor ='White'
function createQuadrado(base, altura){
    if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números";
    let _cor = undefined;
    return{
        base,
        altura,
        get cor() {return _cor;},
        set cor(cor) {
            if(cor !== 'red' && cor !== 'green' && cor !== 'blue'){
                throw 'O valor da propiedade cor deve ser ""red", "green" ou "blue." '
            }
            _cor = cor;
        }
    };
}

const quadrado = createQuadrado(3,4);
console.log(quadrado);
console.log(quadrado.cor);
quadrado.cor ='red';
console.log(quadrado.cor)
quadrado.cor ="white"
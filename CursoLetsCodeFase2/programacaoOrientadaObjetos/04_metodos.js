class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "informação não numérica";
        this.base = base;
        this.altura = altura;
        this.cor = undefined; // opcional
    }
    calculArea(){
        return this.base*this.altura;
    }

    duplicaBase(){
        this.base = 2*this.base
    }

    duplicaAltura(){
        this.altura = this.altura*2
    }

    imprimir(){
        return  `<div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "blue"}'></div>`;
    }
}

const quadrado = new Quadrado(11, 12);
console.log(quadrado.calculArea());

quadrado.duplicaBase();
console.log(quadrado.calculArea());

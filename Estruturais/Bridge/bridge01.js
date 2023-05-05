// CORES
// implementação da interface Cor 
class Cor{
    constructor(cor){
        this.cor = cor;
    }
    getCor(){
        return this.cor;
    }
}
// implementação concreta das cores
class RedColor extends Cor{
    constructor(){
        super("vermelho");
    }
}

class BlueColor extends Cor{
    constructor(){
        super("azul");
    }
}

class GreenColor extends Cor{
    constructor(){
        super("verde");
    }
}

// FORMA
// implementação da interface forma
class Forma{
    constructor(cor){
        this.cor = cor;
    }
    setCor(cor){
        this.cor = cor;
    }
    desenho(){
        throw new Error("Este método precisa ser implementado pela subclasse.");
    }
}

// Abstração Refinada
class CirculoForma extends Forma{
    desenho(){
        console.log(`Desenho de um Circulo ${this.cor.getCor()}`)
    }
}

class QuadradoForma extends Forma{
    desenho(){
        console.log(`Desenho de um Quadrado ${this.cor.getCor()}`)
    }
}

class TrianguloForma extends Forma{
    desenho(){
        console.log(`Desenho de um Triangulo ${this.cor.getCor()}`)
    }
}
// APLICAÇÃO
// Cliente
const red = new RedColor();
const blue = new BlueColor();
const green = new GreenColor();

const circulo = new CirculoForma(blue);
const quadrado = new QuadradoForma(red);
const triangulo = new TrianguloForma(green);

// Desenha um circulo
circulo.desenho(); 
// Desenha um quadrado
quadrado.desenho();
// Desenha um triangulo
triangulo.desenho();


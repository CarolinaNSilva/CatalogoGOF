// Desafio 01 PERSONALIZAÇÃO DE VEICULO

//MOTOR-----------------------------------------------
class Motor{
    constructor(motor){
        this.motor = motor;
    }
    getMotor(){
        return this.motor;
    }
}
// implementação concreta das Motores
class Motor10 extends Motor{
    constructor(){
        super("1.0");
    }
}

class Motor14 extends Motor{
    constructor(){
        super("1.4");
    }
}

class Motor20 extends Motor{
    constructor(){
        super("2.0");
    }
}

//COR-----------------------------------------------
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

class BlackColor extends Cor{
    constructor(){
        super("Preto");
    }
}

class WhiteColor extends Cor{
    constructor(){
        super("branco");
    }
}

//PORTAS--------------------------------------------
class Porta{
    constructor(porta){
        this.porta = porta;
    }
    getPorta(){
        return this.porta;
    }
}
// implementação concreta das Portas
class Porta2 extends Porta{
    constructor(){
        super("Duas portas");
    }
}

class Porta4 extends Porta{
    constructor(){
        super("quetro portas");
    }
}


//Mais opções---------------------------------------
class Opcao{
    constructor(opcao){
        this.opcao = opcao;
    }
    getOpcao(){
        return this.opcao;
    }
}
// implementação concreta das Motores
class OpcaoLS extends Opcao{
    constructor(){
        super("LS");
    }
}

class OpcaoLT extends Opcao{
    constructor(){
        super("LT");
    }
}

class OpcaoJoy extends Opcao{
    constructor(){
        super("Joy");
    }
}

class Carro{
    constructor(motor, cor, porta, opcao){
        this.motor = motor;
        this.cor = cor;
        this.porta = porta;
        this.opcao = opcao;
    }
    setMotor(motor){
        this.motor = motor;
    }
    setCor(cor){
        this.cor = cor;
    }
    setPorta(porta){
        this.porta = porta;
    }
    setOpcao(opcao){
        this.opcao = opcao;
    }

    monta(){
        console.log(`
        Seu carro foi montado!
        Motor: ${this.motor.getMotor()}
        Cor: ${this.cor.getCor()}
        Qt de portas: ${this.porta.getPorta()}
        Mais opções: ${this.opcao.getOpcao()}
        `)
    }
}

// APLICAÇÃO
// Cliente
const red = new RedColor();
const black = new BlackColor();
const white = new WhiteColor();

const motor10 = new Motor10();
const motor14 = new Motor14();
const motor20 = new Motor20();

const porta2 = new Porta2();
const porta4 = new Porta4();

const opcaoJoy = new OpcaoJoy();
const opcaoLT = new OpcaoLT();
const opcaoLS = new OpcaoLS();

const carro1 = new Carro(motor10, red, porta2, opcaoJoy);

carro1.monta();


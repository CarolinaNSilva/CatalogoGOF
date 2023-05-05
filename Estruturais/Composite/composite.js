//componente--------------------------------------------------
class Componente{
    constructor(nome){
        this.nome = nome;
    }

    adicionar(){

    }

    remover(){

    }

    obterNome(){

    }
}

//folha--------------------------------------------------
class Folha extends Componente{
    constructor(nome, preco){
        super(nome)
        this.preco = preco;
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        return this.preco;
    }
}

//container--------------------------------------------------
class Container extends Componente{
    constructor(nome){
        super(nome);
        this.componentes = [];
    }

    adicionar(componente){
        this.componentes.push(componente);

    }
    remover(componente){
        const index = this.componentes.indexOf(componente);
        this.componentes.splice(index, 1);
    }
    obterNome(){
        return this.nome;
    }
    obterPreco(){
        let preco = 0;
        this.componentes.forEach(componente => {
            preco += componente.obterPreco();
        });
        return preco;
    }
}

//CLIENTE--------------------------------------------------
// -----------------------produtos
const maca = new Folha('Maçã', 2.5)
const laranja = new Folha('Laranja', 4.5)
const uva = new Folha('Uva', 13.0)
const abacaxi = new Folha('Abacaxi', 2.0)

const frutas = new Container('Frutas');
frutas.adicionar(maca)
frutas.adicionar(laranja)
frutas.adicionar(uva)
frutas.adicionar(abacaxi)

const caixa = new Container('Caixa de frutas')
caixa.adicionar(frutas)
caixa.adicionar(new Folha('Embalagem', 1.0))

console.log(` Preço total: R$ ${caixa.obterPreco()}`)
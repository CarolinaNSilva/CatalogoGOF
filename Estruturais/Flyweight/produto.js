// Comercio eletronico que seja responsavel por criar objs representando produtos.

// flyweight  factory ---------------------------------------------------------------------------
class FlyweightFactory {
    constructor() {
        this.flyweights = {}
    }

    obterFlyweight(codigo) {
        if(!this.flyweights[codigo]) {
            this.flyweights[codigo] = new ProdutoFlyweight(codigo);
        }
        return this.flyweights[codigo];
    }
}
//flyweight ---------------------------------------------------------------------------
class ProdutoFlyweight {
    constructor(codigo){
        this.codigo = codigo;
    }

    exibirDetalhes(nome, preco) {
        console.log(`Nome: ${nome}, Preço: R$${preco.toFixed(2)}, código: ${this.codigo}`);
    }
}

//cliente ---------------------------------------------------------------------------
class Client {
    constructor(){
        this.flyweightFactory = new FlyweightFactory();
        this.carrinho = []
    }
    adicionarProduto(codigo, nome, preco){
        const flyweight = this.flyweightFactory.obterFlyweight(codigo);
        this.carrinho.push({flyweight, nome, preco});
    }

    exibirCarrinho(){
        console.log('Itens de carrinho:')
        this.carrinho.forEach(item => {
            item.flyweight.exibirDetalhes(item.nome, item.preco);
        });
    }

}
// usase
const client = new Client();
client.adicionarProduto("001","Camiseta",39.90);
client.adicionarProduto("002","Jaqueta",230.00);
client.adicionarProduto("003","calça",100.56);
client.adicionarProduto("001","Camiseta",100.56);
client.exibirCarrinho();
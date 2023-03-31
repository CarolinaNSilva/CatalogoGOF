const Carrinho = (function(){
    let instance;

    function createInstance(){
        let produtos = [];

        function addProduto(produto){
            produtos.push(produto);
        }

        function getProduto(){
            return produtos;
        }

        function clearCarrinho(){
            produtos = [];
        }

        return{
            addProduto,
            getProduto,
            clearCarrinho
        };
    }

    return{
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

//cliente------------------

const carrinhoInstance1 = Carrinho.getInstance();

console.log("#Carrinho 01")
carrinhoInstance1.addProduto({id: 1, nome: "produto1", preco: 10});
carrinhoInstance1.addProduto({id: 1, nome: "produto1", preco: 10});
carrinhoInstance1.addProduto({id: 1, nome: "produto1", preco: 10});
carrinhoInstance1.addProduto({id: 1, nome: "produto1", preco: 10});

console.log(carrinhoInstance1.getProduto());


const carrinhoInstance2 = Carrinho.getInstance();

carrinhoInstance2.clearCarrinho();

console.log("#Carrinho 02")
carrinhoInstance2.addProduto({id: 2, nome: "produto2", preco: 20});
carrinhoInstance2.addProduto({id: 2, nome: "produto2", preco: 20});
carrinhoInstance2.addProduto({id: 2, nome: "produto2", preco: 20});
carrinhoInstance2.addProduto({id: 2, nome: "produto2", preco: 20});

console.log(carrinhoInstance2.getProduto());







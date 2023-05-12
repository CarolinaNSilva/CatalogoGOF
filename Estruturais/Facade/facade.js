// subsistema ---------------------------------------------------------------
class SistemaPagamento{
    processarPagamento(valor){
        console.log(`processando pagamento, valor: ${valor}`);
    }
}

// subsistema ---------------------------------------------------------------
class SistemaLogistica{
    enviarProduto(destinatario){
        console.log(`enviando para:  ${destinatario}`);
    }
}

// subsistema ---------------------------------------------------------------
class SistemaNotificao{
    enviarEmail(destinatario, mensagem){
        console.log(`enviando mensagem ao cliente:  ${destinatario} : ${mensagem}`);
    }
}


// fachada ---------------------------------------------------------------
class LojaOnline{
    constructor(){
        this.pagamento = new SistemaPagamento();
        this.logistica = new SistemaLogistica();
        this.notificacao = new SistemaNotificao();
    }

    realizarCompra(produto, destinatario){
        this.pagamento.processarPagamento(produto.preco);
        this.logistica.enviarProduto(destinatario);
        this.notificacao.enviarEmail(destinatario, `Seu pedido de ${produto.nome} foi enviado`);
    }
}


// aplicação ---------------------------------------------------------------
const loja = new LojaOnline();

const produto = {
    nome: "Camiseta",
    preco: 30.00
};

const destinatario = "nicoly@gmail.com"

loja.realizarCompra(produto, destinatario);
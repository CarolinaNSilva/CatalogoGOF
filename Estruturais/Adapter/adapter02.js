// Padrão GOF - Estruturais - Adapter CLASSE
// Classe do cliente

class Client{
    constructor(){
        this.adapter = new Adapter();
    }

    request(){
        console.log("Fazendo uma requisição.");
        this.adapter.specificRequest();
    }
}

// Classe Serviço Existente
class Adaptee{
    specificRequest(){
        console.log("Requisição específica do Adaptee.");
    }
}

// Classe Adaptador
class Adapter extends Adaptee{
    specficRequest(){
        console.log("Adaptação do serviço existente para o cliente");
    }
}

// Utilizando o Adaptador
const client = new Client();
client.request();
// OBJETO
// Interface do cliente
class ITarget{
    request() {

    }
}

// Cliente
class Client{
    constructor(target){
        this.target = target;
    }

    makeRequest(){
        console.log("Fazendo uma requisição");
        this.target.request();
    }
}

// servico existente
class Adaptee{
    specficRequest(){
        console.log("Requisição específica do Adaptee.");
    }
}

// adaptador
class Adapter{
    constructor(adaptee){
        this.adaptee = adaptee;
    }

    request(){
        this.adaptee.specficRequest();
    }
}

// Utilização
// fazendo uma requisição
// requisição especifica do adaptee
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const client = new Client(adapter);

client.makeRequest(); 

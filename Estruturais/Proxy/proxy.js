// objeto real ---------------------------------------------------
class ServicoReal{
    executar(){
        console.log('serviço real')
    }
}

//proxy ---------------------------------------------------
class ProxyServicoReal{
    constructor(){
        this.servicoReal = new ServicoReal();

    }
    executar(){
        console.log('Antes de executar a Proxy');
        this.servicoReal.executar();
        console.log('depois de executar a proxy');
    }
}

//uso do proxy ---------------------------------------------------
const proxy = new ProxyServicoReal();
proxy.executar();
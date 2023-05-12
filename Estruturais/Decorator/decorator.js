//componente -------------------------------------------------------------------
class ComponenteNotificador {
    enviar(menssagem){
        console.log(`enviando mensagem: ${menssagem}`);
    }
}

//decorator base -------------------------------------------------------------------

class DecoratorNotificador {
    constructor(componente){
        this.componente = componente;
    }

    enviar(mensagem){
        this.componente.enviar(mensagem);
    }
}

//concreto 1 -------------------------------------------------------------------
class DecoratorNotificadorSMS extends DecoratorNotificador {
    enviar(mensagem){
        super.enviar(mensagem);
        console.log(`enviando mensagem por SMS: ${mensagem}`)
    }
}

//concreto 2 -------------------------------------------------------------------
class DecoratorNotificadorFacebook extends DecoratorNotificador {
    enviar(mensagem){
        super.enviar(mensagem);
        console.log(`enviando mensagem por Facebook: ${mensagem}`)
    }
}

//concreto 3 -------------------------------------------------------------------
class DecoratorNotificadorSlack extends DecoratorNotificador {
    enviar(mensagem){
        super.enviar(mensagem);
        console.log(`enviando mensagem por Slack: ${mensagem}`)
    }
}


//cliente -------------------------------------------------------------------
const notificador = new ComponenteNotificador();
const notificadorComSMS = new DecoratorNotificadorSMS(notificador);
const notificadorComFacebook = new DecoratorNotificadorFacebook(notificador);
const notificadorComSlack = new DecoratorNotificadorSlack(notificador);


notificadorComFacebook.enviar("Hoje é sexta graças a Deus não aguento mais")
notificadorComSlack.enviar("preciso de férias")
notificadorComSMS.enviar("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

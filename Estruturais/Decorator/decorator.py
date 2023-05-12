# //componente -------------------------------------------------------------------
class ComponenteNotificador: 
    def enviar(self, mensagem):
        print(f"Enviando menssagem {mensagem}")

# //decorator base -------------------------------------------------------------------

class DecoratorNotificador:
    def __init__(self, componente):
        self.componente = componente

    def enviar(self, mensagem):
        self.componente.enviar(mensagem)     

# //concreto 1 -------------------------------------------------------------------
class DecoratorNotificadorSMS (DecoratorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f" enviando mensagem por SMS: {mensagem}") 

# //concreto 2 -------------------------------------------------------------------
class DecoratorNotificadorFacebook (DecoratorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f" enviando mensagem por Facebook: {mensagem}") 

# //concreto 3 -------------------------------------------------------------------
class DecoratorNotificadorSlack (DecoratorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f" enviando mensagem por Slack: {mensagem}") 


# //cliente -------------------------------------------------------------------
notificador = ComponenteNotificador()
notificadorComSMS = DecoratorNotificadorSMS(notificador)
notificadorComFacebook = DecoratorNotificadorFacebook(notificador)
notificadorComSlack = DecoratorNotificadorSlack(notificador)


notificadorComFacebook.enviar("Hoje é sexta graças a Deus não aguento mais")
notificadorComSlack.enviar("preciso de férias")
notificadorComSMS.enviar("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

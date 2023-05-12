# // subsistema ---------------------------------------------------------------
class SistemaPagamento:
    def processarPagamento(self, valor):
        print(f"processando pagamento {valor} ")


# // subsistema ---------------------------------------------------------------
class SistemaLogistica:
    def enviarProduto(self, destinatario):
        print(f'enviando para:  {destinatario}')

# // subsistema ---------------------------------------------------------------
class SistemaNotificao:
    def enviarEmail(self, destinatario, mensagem):
        print(f'enviando mensagem ao cliente:  {destinatario} : {mensagem}');


# // fachada ---------------------------------------------------------------
class LojaOnline:
    def __init__(self):
        self.pagamento =  SistemaPagamento()
        self.logistica = SistemaLogistica()
        self.notificacao = SistemaNotificao()

    def realizarCompra(self, produto, destinatario):
        self.pagamento.processarPagamento(produto['preco'])
        self.logistica.enviarProduto(destinatario)
        self.notificacao.enviarEmail(destinatario, f"Seu pedido de {produto['nome']} foi enviado")


# // aplicação ---------------------------------------------------------------
loja = LojaOnline()

produto = {
    'nome': "Camiseta",
   'preco': 30.00
};

destinatario = "nicoly@gmail.com"

loja.realizarCompra(produto, destinatario)
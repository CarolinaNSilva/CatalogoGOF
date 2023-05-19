# objeto real ------------------------------------
class ServicoReal:
    def executar(self):
        print('serviço real')

class ProxyServicoReal:
    def __init__(self):
        self.servicoReal = ServicoReal() 

    def executar(self):
        print('Antes')
        self.servicoReal.executar()
        print('Depois')   

proxy = ProxyServicoReal()
proxy.executar()                
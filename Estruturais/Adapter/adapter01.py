# OBJETO
# intefcace client             
class ITarget:
    def request(self):
        pass

# cliente
class Client:
    def __init__(self, target):
        self.target = target

    def make_request(self):
        print("fazendo uma requisição")
        self.target.request()

#serviço existente
class Adaptee:
    def specific_request(self):
        print("request especifico do adaptee")


#Adaptador
class Adapter(ITarget):
    def __init__(self, adaptee):
        self.adaptee = adaptee

    def request(self):
        self.adaptee.specific_request()


#utilizando o adaptador
adaptee = Adaptee()
adapter = Adapter(adaptee)
client = Client(adapter)        

client.make_request()
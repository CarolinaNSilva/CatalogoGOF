class Carrinho:
    instance = None

    def __init__(self):
        if Carrinho.instance is None:
            Carrinho.instance = self
            self.items = []
        else:
            raise Exception("Esta Classe é um Singleton!")
    
    @staticmethod
    def get_instance():
        if not Carrinho.instance:
            Carrinho()
        return Carrinho.instance
    
    def add_item(self, item):
        self.items.append(item)
    
    def get_items(self):
        return self.items

class Produto:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco 
    
# Utilizando Singleton
carrinho1 = Carrinho.get_instance()
carrinho2 = Carrinho.get_instance()

# Adicionar itens no Carrinho 1
produto1 = Produto("Camisa", 50.00)
produto2 = Produto("Jaqueta", 100.00)
produto3 = Produto("Anel", 10.00)

carrinho1.add_item(produto1)
carrinho1.add_item(produto2)
carrinho1.add_item(produto3)
carrinho1.add_item(produto2)
carrinho1.add_item(produto3)

# Exibindo itens do Carrinho 1 e 2
print("Carrinho 01:")
for item in carrinho1.get_items():
    print(item.nome, "-", item.preco)
     
# Cliente
carrinho1 = Carrinho.get_instance()

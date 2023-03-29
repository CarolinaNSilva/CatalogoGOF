import copy

class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
    
    def __str__(self):
        return f'Nome: {self.nome}, Idade: {self.idade}'
    
    def clone(self):
        return copy.copy(self)

class PessoaManager:
    def __init__(self):
        self.pessoas = {}
    
    def add_pessoa(self, nome, idade, id):
        pessoa = Pessoa(nome, idade)
        self.pessoas[id] = pessoa
    
    def get_pessoa(self, id):
        return self.pessoas[id].clone()
    

#################################################

manager = PessoaManager()

#add pessoa
manager.add_pessoa('joao', 70, 1)
manager.add_pessoa('maria', 40, 2)
manager.add_pessoa('pedro', 30, 3)
manager.add_pessoa('nicoly', 20, 4)

# clonar pessoa
pessoa1 = manager.get_pessoa(1)
pessoa2 = manager.get_pessoa(4)

# mudar info dos clones
pessoa1.idade = 18
pessoa2.nome = 'carol'

#imprimir
print(manager.get_pessoa(1))
print(manager.get_pessoa(2))
print(manager.get_pessoa(3))
print(manager.get_pessoa(4))

print(pessoa1)
print(pessoa2)
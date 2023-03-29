import copy

class Pessoa:
    def __init__(self, nome, tipo):
        self.nome = nome
        self.tipo = tipo
    
    def __str__(self):
        return f'olá {self.nome}, você é: {self.tipo}'
    
    def clone(self):
        return copy.copy(self)

class PessoaManager:
    def __init__(self):
        self.pessoas = {}
    
    def add_pessoa(self, nome, tipo, id):
        pessoa = Pessoa(nome, tipo)
        self.pessoas[id] = pessoa
    
    def get_pessoa(self, id):
        return self.pessoas[id].clone()
    

#################################################

manager = PessoaManager()

#add pessoa
manager.add_pessoa('', 'Aluno', 1)
manager.add_pessoa('', 'Professor', 2)
manager.add_pessoa('', 'funcionario', 3)


# # clonar pessoa
# pessoa1 = manager.get_pessoa(1)
# pessoa2 = manager.get_pessoa(2)

# # mudar info dos clones
# pessoa1.nome = 'nicoly'
# pessoa2.nome = 'marcos'

# #imprimir
# print(manager.get_pessoa(1))
# print(manager.get_pessoa(2))
# print(manager.get_pessoa(3))

# print(pessoa1)
# print(pessoa2)

# cliente
while True:
    print("\nSeja Bem-vindo a Portaria FATEC!\nPara liberar acesso informe seu vinculo com a instituição")
    print("""
        Vinculo         código
    ----------------------------
        Aluno:           1
        Professor:       2
        Funcionario:     3
        Outro:           0
    """)

    id = input("Código da opção de vinculo: ")
    print(id)
    if id == 1:
        pessoa1 = manager.get_pessoa(1)
        pessoa1.nome = input('Informe seu nome: ')
        print(pessoa1)
    elif id == 2:
        pessoa1 = manager.get_pessoa(2)
    elif id == 3:
        pessoa1 = manager.get_pessoa(3)
    else:
        print("Você não possue Vinculo com a instituição! \nPorfavor se dirija a secretaria")

    
    if input("Reiniciar (digite S) ou sair (digite Q)" ) not in ("S", "s"):
        break


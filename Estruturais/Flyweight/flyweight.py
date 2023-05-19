# flyweight  factory ------------------------------
class FlyweightFactory:
    def __init__(self):
        self.flyweights = {}

    def getFlyweight(self, key):
        if key not in self.flyweight:
            self.flyweights[key] = Flyweight(key)
        return self.flyweights[key]        

# flyweight ------------------------------------

class Flyweight:
    def __init__(self, intrinsicState):
        self.intrinsicState = intrinsicState

    def operation(self, extrinsicState):
        print(f'Intrinsico: {self.intrinsicState}, Extrinsico: {self.extrinsicState}')         


# cliente -----------------------------------------
class Client:
    def __init__(self):
        self.flyweightFactory = FlyweightFactory()

    def run(self):
        flyweightA = self.flyweightFactory.getFlyweight('A')
        flyweightB = self.flyweightFactory.getFlyweight('B')
        flyweightC = self.flyweightFactory.getFlyweight('C')

        flyweightA.operation('Estado 1')
        flyweightB.operation('Estado 2')
        flyweightC.operation('Estado 3')

# usase -----------------------------------------
client = Client()
client.run()
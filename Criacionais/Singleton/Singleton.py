class Singleton:
    isinstance = None

    def __new__(cls):
        if cls.isinstance is None:
            cls.isinstance = super().__new__(cls)
            cls.isinstance.value = 0
        return cls.isinstance
    
    def increment(self):
        self.value += 1
        print(f"Value: {self.value}")

#|-|-\-|
# Cliente
s1 = Singleton()
s2 = Singleton()
s3 = Singleton()

print(s1 == s2)

s1.increment()
s2.increment()
s3.increment()
s1.increment() 


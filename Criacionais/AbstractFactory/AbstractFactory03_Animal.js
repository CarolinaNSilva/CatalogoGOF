class AnimalFactory {
    createAnimal(){
        throw new Error("O método createAnimal deve ser implementado.");
    }
}
    class DogFactory extends AnimalFactory{
        createAnimal() {
            return new Dog();
        }
    }

    class CatFactory extends AnimalFactory{
        createAnimal() {
            return new Cat();
        }
    }

    class Animal {
        makeSound() {
            throw new Error("O método makeSound deve ser implementado.")
        }
    }

    class Dog extends Animal{
        makeSound(){
            return "AUAU";
        }
    }

    class Cat extends Animal{
        makeSound(){
            return "Miau";
        }
    }

    const dogFactory = new DogFactory();
    const dog = dogFactory.createAnimal();
    console.log(dog.makeSound());

    const catFactory = new CatFactory();
    const cat = catFactory.createAnimal();
    console.log(cat.makeSound());

    
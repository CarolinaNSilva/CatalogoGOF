class BurguerBuilder {
    constructor(){
        this.burguer = {};
    }

    addBread(bread) {
        this.burguer.bread = bread;
        return this;
    }

    addCheese(cheese) {
        this.burguer.cheese = cheese;
        return this;
    }

    addMeat(meat) {
        this.burguer.meat = meat;
        return this;
    }

    addVegetables(vegetables) {
        this.burguer.vegetables = vegetables;
        return this;
    }

    build() {
        return this.burguer;
    }
}

const cheeseBurger = new BurguerBuilder()
    .addBread("Brioche")
    .addCheese("mussarela")
    .addMeat("vaca")
    .addVegetables(["lettuce", "tomato"])
    .build();

console.log(cheeseBurger)
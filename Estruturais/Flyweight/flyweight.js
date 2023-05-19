// flyweight  factory ---------------------------------------------------------------------------
class FlyweightFactory {
    constructor() {
        this.flyweights = {}
    }

    getFlyweight(key) {
        if(!this.flyweights[key]) {
            this.flyweights[key] = new Flyweight(key);
        }
        return this.flyweights[key];
    }
}
//flyweight ---------------------------------------------------------------------------
class Flyweight {
    constructor(intrinsicState){
        this.intrinsicState = intrinsicState;
    }

    operation(extrinsicState) {
        console.log(`Intrinsico: ${this.intrinsicState}, Extrinsico: ${extrinsicState}`);
        //intrinsico objs tem em comum. Extrinsico objs tem de diferente
    }
}

//cliente ---------------------------------------------------------------------------
class Client {
    constructor(){
        this.flyweightFactory = new FlyweightFactory();
        
    }

    run (){
        const flyweightA = this.flyweightFactory.getFlyweight('A');
        const flyweightB = this.flyweightFactory.getFlyweight('B');
        const flyweightC = this.flyweightFactory.getFlyweight('C');

        flyweightA.operation('Estado 1');
        flyweightB.operation('Estado 2');
        flyweightC.operation('Estado 3');
    }

}
// usase
const client = new Client();
client.run();
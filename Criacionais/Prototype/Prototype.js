class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    clone(){
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

class PessoaManager{
    constructor(){
        this.pessoas = {};
    }

    addPessoa(nome, idade, id){
        const pessoa = new Pessoa(nome, idade);
        this.pessoas[id] = pessoa;
    }

    getPessoa(id){
        return this.pessoas[id].clone();
    }
}

const manager = new PessoaManager();

// --------------------------------------------

//add pessoas
manager.addPessoa('joao', 30, 1);
manager.addPessoa('maria', 40, 2);
manager.addPessoa('pedro', 50, 3);
manager.addPessoa('nicoly', 20, 4);


// clonar pessoa 
const pessoa1 = manager.getPessoa(1);
const pessoa2 = manager.getPessoa(4);

//modificar idade de clone
pessoa1.idade = 18;
pessoa2.nome = 'carol';

//imprimir pessoas
console.log(manager.getPessoa(1));
console.log(manager.getPessoa(2));
console.log(manager.getPessoa(3));
console.log(manager.getPessoa(4));
console.log(pessoa1);
console.log(pessoa2);
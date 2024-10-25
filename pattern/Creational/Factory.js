class Alien {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

const alien1 = new Alien("Ali", "I'm Ali the alien!")
console.log(alien1.name) // output: "Ali"
console.log(alien1.species) // output: "alien"
alien1.fly() // output: "Zzzzzziiiii
alien1.sayPhrase() // output: "I'm Ali the alien!"
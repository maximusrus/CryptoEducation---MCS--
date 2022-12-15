class Punk {
    constructor (id, type) {
        this.id = id,
        this.type = type
    }

    getId () {
        return `#${this.id}`
    }

    isAlien () {
        return this.type === "Alien"
    }

}

const punk3100 = new Punk(3100, "Alien")
punk3100.getId() // "#3100"
punk3100.isAlien() // true
const punk5217 = new Punk(5217, "Ape")
punk5217.getId() // "#5217"
punk5217.isAlien() // false
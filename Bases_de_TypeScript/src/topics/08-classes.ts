export class Person {
    // public name: string; // Propiedad publica.
    // private address: string; // propiedad privada.

    constructor(
        public name: string,
        private address: string = "No address" // Por defecto si no se instancia con address se almacena el valor "No Address"
    ) {}

}

const ironman = new Person("Ironman","New York");
console.log(ironman);
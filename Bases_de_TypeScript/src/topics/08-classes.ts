export class Person {
    // public name: string; // Propiedad publica.
    // private address: string; // propiedad privada.

    constructor(
        public name: string,
        private address: string = "No address" // Por defecto si no se instancia con address se almacena el valor "No Address"
    ) {
       
    }

}

export class Hero extends Person{
     constructor(
        public alterEgo:string,
        public age: number,
        public realName: string
     ){
        super( realName, "New York");
    }
}

const ironman = new Hero("Ironman",45, "Tony Stark");
console.log(ironman);
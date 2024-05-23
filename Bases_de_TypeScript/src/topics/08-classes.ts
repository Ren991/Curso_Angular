export class Person {
    // public name: string; // Propiedad publica.
    // private address: string; // propiedad privada.

    constructor(
        public firstName: string,
        public lastName: string,
    
        private address: string = "No address" // Por defecto si no se instancia con address se almacena el valor "No Address"
    ) {
       
    }

}

/* export class Hero extends Person{

     constructor(
        public alterEgo:string,
        public age: number,
        public realName: string
     ){
        super( realName, "New York");
    }
} */
 export class Hero {

    //public person: Person;
     constructor(
        public alterEgo:string,
        public age: number,
        public realName: string,
        public person : Person
     ){
       //this.person = new Person(realName);
    }
} 


const tony = new Person("Tony","Stark", "New York")
const ironman = new Hero("Ironman",45, "Tony Stark", tony);
console.log(ironman);
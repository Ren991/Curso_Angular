// OBJETOS , ARREGLOS INTERFACES
//let skills = ["bash","Counter","Healing",true,123]; //ARREGLO QUE ACEPTA STR - NUMBER o BOOLEAN.

const skills: string[] = ["bash","Counter","Healing"]; //ARREGLO QUE solo acepta str. Es una constante.

 //Interface No tiene representacion fisica en js. Sirven para tipar los objetos literales.

 interface Character {
    name:string;
    hp:number;
    skills:string[];
    hometown?:string; // HOMETOWN es opcional.
 }

const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ["bash", "Counter","ss"],
}

strider.hometown = "Rivendell";

console.table(strider);

export {}; //transformar archivo en un módulo
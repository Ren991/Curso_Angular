import { Injectable } from '@angular/core'; // decorador , un servicio es una clase.
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'}) // nuestro servicio va a hacer un singleton en toda la app.
export class DbzService {
    public characters: Character[] = [{
        name:"Krillin",
        power:1000
    },{
        name:"Goku",
        power:9500
    },
    {
        name:"Vegeta",
        power:7500
    }]

    onDeleteCharacter( index: number){
        this.characters.splice(index,1);
      }

    onNewCharacter( character:Character): void{        
        this.characters.push(character);
    }
    
}
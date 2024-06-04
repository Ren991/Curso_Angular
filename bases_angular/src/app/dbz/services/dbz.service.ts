import { Injectable } from '@angular/core'; // decorador , un servicio es una clase.
import { v4  as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'}) // nuestro servicio va a hacer un singleton en toda la app.
export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name:"Krillin",
        power:1000
    },{
        id: uuid(),
        name:"Goku",
        power:9500
    },
    {
        id: uuid(),
        name:"Vegeta",
        power:7500
    }]

    onDeleteCharacter( index: number){
        this.characters.splice(index,1);
      }

    onNewCharacter( character:Character): void{     
        
        const newCharacter: Character = { id: uuid(), ...character };

        this.characters.push(newCharacter);
    }
    
}
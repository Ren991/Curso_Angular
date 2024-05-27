// .component => es componente. 
import { Component } from "@angular/core";

@Component({ //=> Decorador
    selector: 'app-counter',
    template: `
    <h4>Counter: {{counter}}</h4>
    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    
    `,
})
export class CounterComponent {
    public title: string ="Hola Mundo";
    public counter: number = 10 ;
    
    increaseBy(value:number):void {
        this.counter += value;
    }
    resetCounter(){
        this.counter = 10;
    }
}
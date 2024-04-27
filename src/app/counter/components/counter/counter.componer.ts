import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">reset</button>
<button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public title:string = 'Hola Mundo';
  public counter:number =20;

  increaseBy(value:number):void{
    this.counter+=value;
  }
  reset():void{
    this.counter=10;
  }
}


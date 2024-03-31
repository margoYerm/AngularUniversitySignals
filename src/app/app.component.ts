import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter = signal(0)

  constructor() {
    const readOnlySignal = this.counter.asReadonly();
  }

  increment() {
    //this.counter++;
    //this.counter.set(this.counter() + 1)
    this.counter.update( val => val + 1 )
  }
 } 

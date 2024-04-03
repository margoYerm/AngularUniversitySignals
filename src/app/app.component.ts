import { Component, EffectRef, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {   

  derivedCounter = computed(
    () => { 
      const counter = this.counterService.counter();             
      return counter * 10; 
    }
  ) 

  constructor(public counterService: CounterService) {
    console.log(counterService)
  }

  increment() {        
    this.counterService.increment();     
  }
  
 } 

 
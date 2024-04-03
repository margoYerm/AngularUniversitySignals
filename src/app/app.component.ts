import { Component, EffectRef, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter = signal(0);
  multiplier: number = 0;

  course = signal({
    id: 1,
    title: "Angular For Beginners"
  });

  courses = signal([
    "Angular For Beginners",
    "Reactive Angular Course"
  ])

  derivedCounter = computed(
    () => { 
      const counter = this.counter();             
      return counter * 10; 
    }
  )

  effectRef: EffectRef;

  constructor() {    
    this.effectRef = effect((onCleanup) => {
      onCleanup(() => {
        console.log(`Cleanup occurred!`);
      })
      const counterValue = this.counter();
      const derivedCounterValue = this.derivedCounter();      
      console.log(`counter: ${counterValue}; derived counter: ${derivedCounterValue}`);
    }, {
      manualCleanup: true
    })
  }

  increment() {    
    //this.counter.set(this.counter() + 1)
    this.counter.update( val => val + 1 );    
    /*this.course.set({
      id: 1,
      title: "Hello world!",
    })*/    
    //this.courses.update(courses => [...courses, "Angular Core Deep Dive"])
  }

  incrementMultiplier() {
    this.multiplier++;
  }

  onCleanup() {
    this.effectRef.destroy()
  }
  
 } 

 
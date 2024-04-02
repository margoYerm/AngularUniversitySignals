import { Component, computed, effect, signal } from '@angular/core';
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

  constructor() {
    //const readOnlySignal = this.counter.asReadonly();
    effect(() => {
      const counterValue = this.counter();
      const derivedCounterValue = this.derivedCounter();
      //here can be request to the backend using an http call 
      //and save some data in the DB
      //you can save something to local storage
      console.log(`counter: ${counterValue}; derived counter: ${derivedCounterValue}`);
      //this.counter.update(val => val + 1) //we get error, we can't modify signals here

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

  
 } 

 
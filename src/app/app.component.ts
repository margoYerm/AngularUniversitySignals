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
  counter = signal(0);

  course = signal({
    id: 1,
    title: "Angular For Beginners"
  });

  courses = signal([
    "Angular For Beginners",
    "Reactive Angular Course"
  ])

  constructor() {
    const readOnlySignal = this.counter.asReadonly();
  }

  increment() {
    //this.counter++;
    //this.counter.set(this.counter() + 1)
    this.counter.update( val => val + 1 );
    //this.course().title = "Hello world!"; //wrong way
    this.course.set({
      id: 1,
      title: "Hello world!",
    })
    //this.courses().push("Angular Core Deep Dive");//wrong way
    this.courses.update(courses => [...courses, "Angular Core Deep Dive"])
  }
 } 

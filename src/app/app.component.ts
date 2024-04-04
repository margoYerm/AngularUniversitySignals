import { Component, EffectRef, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterService } from './services/counter.service';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { NgForOf } from '@angular/common';
import { Course } from './model/course';
import { CoursesService } from './courses/courses.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CourseCardComponent,
    CourseImageComponent,
    NgForOf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {   
  courses = COURSES;

  derivedCounter = computed(
    () => { 
      const counter = this.counterService.counter();             
      return counter * 10; 
    }
  ) 

  constructor(
    public counterService: CounterService,
    //private coursesService: CoursesService,
    ) {}

  increment() {        
    this.counterService.increment();     
  }

  /*saveValue(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved!')
      )
  }*/
  
 } 

 
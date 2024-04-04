import {  
  Component, computed, effect,
  EventEmitter, input,
  Input, 
  OnInit, 
  Output, 
} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../courses.service';
import {NgIf, NgSwitch, NgSwitchCase} from '@angular/common';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  imports: [
    NgIf,
    NgSwitch,
    NgSwitchCase
  ],
  standalone: true

})
export class CourseCardComponent implements OnInit {

  //@Input() course!: Course;
  course = input<Course>();  
  
  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor() {

    /*effect(() => {
      console.log(`New course value: `, this.course);
    });*/

  }  

  ngOnInit() {
    const description = computed( () => {
      const course = this.course();
      return course?.description + '('+ course?.category + ')'
    })
  }

  onTitleChanged(newTitle: string) {
    this.course()!.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({...this.course()!, description});
  }
}
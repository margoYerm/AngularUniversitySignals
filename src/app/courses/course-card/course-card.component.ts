import {  
  Component, computed, effect,
  EventEmitter, input,
  Input, 
  OnChanges, 
  OnInit, 
  Output,
  SimpleChanges, 
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
export class CourseCardComponent implements OnInit, OnChanges {

  //@Input() course!: Course;
  //course = input.required<Course>();  
  course = input<Course>(null!, {
    alias: "tutorial",
    //transform: (val) => {}
  });
  
  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor() {
    effect(() => {
      console.log(`New course value: `, this.course());
    });
  }  

  ngOnInit() {
    const description = computed( () => {
      const course = this.course();
      return course?.description + '('+ course?.category + ')'
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    /*// using ngOnChanges with @Input() course!: Course;
    if (changes['course']) {
      console.log(`New course value: `, this.course)
    }*/
  }

  onTitleChanged(newTitle: string) {
    this.course()!.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({...this.course()!, description});
  }
}
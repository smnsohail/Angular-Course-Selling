import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StringsEnum } from '../enum/strings.enum';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  // couseTitle: string = 'Angular Course';
  // couseDescription: string= 'This is a course description';

  //input decorator to pass value from child to parent
  /*
  // @Input() course:any; 
  // To reduce redendecny in code we will call all the courses at once in courses.component
  // */

  @Input() courses: any; //changed from @Input() course:any; to @Input() courses:any;
  @Input() isAdmin: any = false;
  @Output() del = new EventEmitter();

  ngOnInit() {
    this.getCourses();
  }
  getCourses() {
    const data = localStorage.getItem(StringsEnum.STORAGE_KEY);
    if (data) {
      this.courses = JSON.parse(data);
    }
  }

  /*
    //BEFORE, DELETE COURSE 
    deleteCourse(){
      this.del.emit(this.course);
    }
  */
 
  //AFTER
  deleteCourse(course: any) {
    this.del.emit(course);
  }
}

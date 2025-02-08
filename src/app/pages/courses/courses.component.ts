import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../interface/course.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {

  subscribeCourse!:Subscription;


  //  INJECTING THE courseService 
  // constructor( private courseService: CourseService ){}
  private courseService = inject(CourseService);

  courses:Course[]=[];
  @Input() isAdmin:boolean = false;

  ngOnInit(){
    this.courses = this.courseService.getCourses();
    this.subscribeCourse = this.courseService.courses.subscribe({
      next: (courses) => { 
        this.courses = courses; 
        // console.log("courses :"+ courses );
        
      },
      error: (error) => { 
        console.error('Error:', error); 
      },
    })
  }

  deleteCourse(course:Course) {
    this.courseService.deleteCourse(course);
  }
    
  ngOnDestroy(){
    if(this.subscribeCourse){
      // console.log('Destroyed');
      
      this.subscribeCourse.unsubscribe();
    }
  }

}










/* =========WHATEVER WE USED BEFORE=========
{
   couseTitle: string = 'Angular Course';
   couseDescription: string= 'This is a course description';

  input decorator to pass value from child to parent
  
  @Input() course:any; 
  To reduce redendecny in code we will call all the courses at once in courses.component

   @Input() courses: any; changed from @Input() course:any; to @Input() courses:any;
  courses:Course[]=[];
  @Input() isAdmin: any = false;
   @Output() del = new EventEmitter();  this.del.emit(course); Using services

  ngOnInit() {
     this.getCourses();
  }

  // ============== getCourses() MOVED TO SERVICES===========
   getCourses() {
     const data = localStorage.getItem(StringsEnum.STORAGE_KEY);
     if (data) {
       this.courses = JSON.parse(data);
     }
   }

  
    //BEFORE, DELETE COURSE 
    deleteCourse(){
      this.del.emit(this.course);
    }
  
 
  //AFTER
   deleteCourse(course: any) {
      this.del.emit(course); Using services
   } 
}
*/

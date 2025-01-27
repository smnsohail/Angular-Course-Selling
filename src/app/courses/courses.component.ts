import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
// couseTitle: string = 'Angular Course';
// couseDescription: string= 'This is a course description';

  //input decorator to pass value from child to parent
  @Input() course:any;
  

}

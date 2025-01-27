import { Component, inject } from '@angular/core';
import { CoursesComponent } from "../courses/courses.component";

@Component({
  selector: 'app-home',
  imports: [CoursesComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Sohail M Nadaf';
  
  courses:any[]=[];

  // ngOnInit(){
  //   this.changeTitle();
  // }
  changeTitle(){
    this.title = 'Sohail M Nadaf - Angular Developer';
  }
}

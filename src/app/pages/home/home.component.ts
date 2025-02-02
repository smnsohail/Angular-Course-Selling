import { Component, inject, NgModule } from '@angular/core';
import { CoursesComponent } from "../courses/courses.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StringsEnum } from '../../enum/strings.enum';


@Component({
  selector: 'app-home',
  imports: [CoursesComponent, CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // constructor(private router: Router) {}

  // navigateToCourses() {
  //   this.router.navigate(['/courses']);
  // }
  title = 'Sohail M Nadaf';

  courses: any[] = [];

  // ngOnInit(){
  //   this.changeTitle();
  // }
  changeTitle() {
    this.title = 'Sohail M Nadaf - Angular Developer';
  }

  // GET COURSES FOR HOME COMPONENT
  ngOnInit() {
    // this.getCourses();
  }
  // getCourses() {
  //   const data = localStorage.getItem(StringsEnum.STORAGE_KEY);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }
}

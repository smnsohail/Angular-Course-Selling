import { Inject, Injectable } from '@angular/core';
import { StringsEnum } from '../../enum/strings.enum';
import { Course } from '../../interface/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // here we are not storing any value of Courses here, so to set an id for each course we will be using BehaviorSubject<>();
  //Here we will use characters in defining the name of the BehaviorSubject, we can use "_" or "-" or any other character but it should be unique."$" is preferrable here.
  //Using a special character like $ in the name of your BehaviorSubject (course$) is a common and good practice in many JavaScript/TypeScript projects, especially when working with RxJS (Reactive Extensions for JavaScript)
  
  private course$ = new BehaviorSubject<Course[]>([]);

  //getter is defined as follows, so that we can get the value of the BehaviorSubject in our component.
  get courses(){
    return this.course$.asObservable();
  }

  constructor() { }

  //From course component
  getCourses():Course[] {
    const data = localStorage.getItem(StringsEnum.STORAGE_KEY);
    if (data) {
      const courses = JSON.parse(data);
      this.updateCourses(courses);
      return courses;
    }
    return [];
  }

  deleteCourse(data:Course){
   let courses = this.course$.value;
   courses =  courses.filter(item => item.id != data.id);
   this.updateCourses(courses); //this.course$.next(courses);
   this.setItem(courses);
  }

  addCourse(data:Course){
    const courses = this.course$.value;
    const newCourses = [...courses, {...data, id : courses.length + 1}];

    //this.course$.next(newCourses); //appending newly added courses to the courses$ BehaviorSubject
    this.updateCourses(newCourses); // using a function instead of repeating code

    this.setItem(newCourses);
    return newCourses
  }
  
  updateCourses(data:Course[]){
    this.course$.next(data);
  }

  setItem(data: Course[]) {
    localStorage.setItem(StringsEnum.STORAGE_KEY, JSON.stringify(data)); // changed this.courses to data in stringify
  }

}

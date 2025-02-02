import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StringsEnum } from '../../enum/strings.enum';
import { CoursesComponent } from '../courses/courses.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [CoursesComponent, FormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  model: any = {}; //as we used ngModel in the inputs

  cover!: string; //The ! symbol in TypeScript is called the definite assignment assertion. It tells the TypeScript compiler that the variable will definitely be assigned a value at runtime, even if it is not initialized at the time of declaration.
  cover_file: any;
  showError: boolean = false;
  // courses: any[] = [];

  // ngOnInit() {
  //   // this.getCourses();
  // }

  // getCourses() {
  //   const data = localStorage.getItem(StringsEnum.STORAGE_KEY);
  //   // console.log(data);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }

  //onSubmit function triggers when submit is clicked
  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      // console.log('Invalid form');
      form.control.markAllAsTouched(); //to make all fields red when submit button is clicked

      //below line is used to show error message if image is not selected
      this.showError = !this.cover;

      return;
    }
    //console.log(form.value);
    //this is used to get the form data in the console for eg  title:"abc" description :"xyz"

    //below condition to check if  there is a image uploaded or not
    // console.log('submitted');

    //this is written after defining the saveCourse() function
    this.saveCourse(form.value);
    this.clearForm(form);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cover_file = file;

      //above code if statement is used to check if the file is selected or not

      // to show the image we need to use file reader
      const reader = new FileReader();
      // console.log(reader);

      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        this.cover = dataUrl;
        // console.log(this.cover); //this logs the url in to the console
      };

      reader.readAsDataURL(file);
    }
  }

  resetFile() {
    this.cover = ''; // Clear the cover image preview
    this.cover_file = null; // Clear the file reference
    this.showError = false; // Reset error state
  }

  clearForm(form: NgForm) {
    form.resetForm();
    this.resetFile();
  }

  //to save couse using local storage
  saveCourse(formValue: any) {
    // console.log(formValue);

    /* ===================      After services     ===================================
    const data = {
      ...formValue,
      image: this.cover,
      id: this.courses.length + 1,
    };
    this.courses = [...this.courses, data]; 
    
    // console.log(this.courses);

    //localStorage.setItem(StringsEnum.STORAGE_KEY, JSON.stringify(this.courses)); // commented this because we defined setItem() function so there we have used this. Now we can rewrite this as below..

    this.setItem(this.courses);
    =================================================*/
  }

  setItem(data: any) {
    localStorage.setItem(StringsEnum.STORAGE_KEY, JSON.stringify(data));   // changed this.courses to data in stringify
  }
  /* ===================       After  services    ===================================
  deleteCourse(course: any) {
    this.courses = this.courses.filter((item) => item.id != course.id);
    // console.log(this.courses);

    this.setItem(this.courses);
    
  }

  ======================================================================*/
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sohail M Nadaf';

  // ngOnInit(){
  //   this.changeTitle();
  // }
  changeTitle(){
    this.title = 'Sohail M Nadaf - Angular Developer';
  }
}

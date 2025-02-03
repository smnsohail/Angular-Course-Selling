import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sohail M Nadaf';

  // ngOnInit(){
  //   this.changeTitle();
  // }
  // changeTitle(){
  //   this.title = 'Sohail M Nadaf - Angular Developer';
  // }
}

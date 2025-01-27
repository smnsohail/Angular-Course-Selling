import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  
  activeMenu: string = 'home'; // Set 'home' as the default active menu

  setActiveMenu(menu: string): void {
    this.activeMenu = menu;
  }

  
}

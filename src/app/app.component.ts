import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
 constructor(private themeService: ThemeService) {
  this.themeService.toggleTheme();
 }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

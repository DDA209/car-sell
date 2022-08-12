import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  text = '';
  displayText = false;
  cars = [
    { id: 0, brand: 'Peugeot', model: '205', color: 'burgundy' },
    { id: 1, brand: 'Peugeot', model: '307', color: 'brown' },
    { id: 2, brand: 'Citroën', model: 'BX', color: 'blue' },
    { id: 3, brand: 'Renault', model: '19', color: 'grey' },
    { id: 4, brand: 'Skoda', model: 'Fabia', color: 'blue' },
  ];

  onClickInputReinit(): void {
    this.text = this.text && '';
  }

  onClickButton(): void {
    this.displayText = !this.displayText;
  }
}

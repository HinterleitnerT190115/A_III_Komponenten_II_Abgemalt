import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" [href]="propUrlBinding">
      Learn more about Angular 
    </a>
    <h2>{{test}}</h2>
    <h3 (click)="myClickHandler()">Klicki Textbtn</h3>
    <br>
    <input type=text>
  `,
})
export class App {
  name = 'Angular';
  test: String = 'Klick den Text drunter:';
  propUrlBinding: String = 'https://google.com';

  myClickHandler(): void {
    this.test = 'Erfolg!';
  }
}

bootstrapApplication(App);

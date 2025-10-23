import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoxComponent } from './box/box.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    FontAwesomeModule,
    Slide1Component,
    Slide2Component,
    Slide3Component,
  ],
})
export class AppComponent {
  title = 'cdev_ng';
}

bootstrapApplication(AppComponent);

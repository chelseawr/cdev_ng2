import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoxComponent } from './box/box.component';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FontAwesomeModule, BoxComponent],
})
export class AppComponent {
  title = 'cdev_ng';
}

bootstrapApplication(AppComponent);

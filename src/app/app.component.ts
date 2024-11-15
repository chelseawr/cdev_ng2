import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoxComponent } from './box/box.component';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, FontAwesomeModule, BoxComponent],
})
export class AppComponent {
  shiningRed = `rgb(152, 31, 36)`;
  shiningOrange = `rgb(223, 95, 24)`;
  title = 'cdev_ng';
}

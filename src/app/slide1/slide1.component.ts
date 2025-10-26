import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { AdjectiveWheelComponent } from '../adjective-wheel/adjective-wheel.component';
import { ContactButtonComponent } from '../contact-button/contact-button.component';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slide1',
  standalone: true,
  imports: [
    FontAwesomeModule,
    AdjectiveWheelComponent,
    MatButtonModule,
    ContactButtonComponent,
  ],
  templateUrl: './slide1.component.html',
  styleUrl: './slide1.component.scss',
})
export class Slide1Component {
  sourcePath =
    'https://public-cdev.s3.us-east-2.amazonaws.com/May2024-resume.pdf';
  fileName = 'May2024-resume.pdf';

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFilePdf = faFilePdf;
}

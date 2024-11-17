import { Component } from '@angular/core';
import { AdjectiveWheelComponent } from '../adjective-wheel/adjective-wheel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { ContactButtonComponent } from '../contact-button/contact-button.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [
    AdjectiveWheelComponent,
    MatButtonModule,
    ContactButtonComponent,
    FontAwesomeModule,
  ],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
})
export class BoxComponent {
  sourcePath =
    'https://public-cdev.s3.us-east-2.amazonaws.com/May2024-resume.pdf';
  fileName = 'May2024-resume.pdf';

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFilePdf = faFilePdf;
}

import { Component } from '@angular/core';
import { AdjectiveWheelComponent } from '../adjective-wheel/adjective-wheel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { ContactButtonComponent } from '../contact-button/contact-button.component';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [AdjectiveWheelComponent, ContactButtonComponent, FontAwesomeModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
})
export class BoxComponent {
  // change source path to Amplify hosted file /assets
  sourcePath =
    'https://github.com/chelseawr/cdev_ng/blob/master/src/assets/May2024-resume.pdf';
  fileName = 'May2024-resume.pdf';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFilePdf = faFilePdf;
}

import { Component } from '@angular/core';
import { AdjectiveWheelComponent } from '../adjective-wheel/adjective-wheel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { ContactButtonComponent } from '../contact-button/contact-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [
    AdjectiveWheelComponent,
    MatButtonModule,
    MatTooltipModule,
    ContactButtonComponent,
    FontAwesomeModule,
  ],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
})
export class BoxComponent {
  openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // TODO change source path to Amplify hosted file /assets
  sourcePath =
    'https://github.com/chelseawr/cdev_ng/blob/master/src/assets/May2024-resume.pdf';
  fileName = 'May2024-resume.pdf';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFilePdf = faFilePdf;
}

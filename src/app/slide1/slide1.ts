import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { AdjectiveWheel } from '../adjective-wheel/adjective-wheel';
import { ContactButton } from '../contact-button/contact-button';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-slide1',
  standalone: true,
  imports: [FontAwesomeModule, AdjectiveWheel, MatButtonModule, ContactButton],
  templateUrl: './slide1.html',
  styleUrl: './slide1.scss',
})
export class Slide1 {
  constructor(public responsive: ResponsiveService) {}
  sourcePath =
    'https://public-cdev.s3.us-east-2.amazonaws.com/May2024-resume.pdf';
  fileName = 'May2024-resume.pdf';

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFilePdf = faFilePdf;
  faArrow = faChevronDown;

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronDown,
  faCircleChevronRight,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-slide1',
  standalone: true,
  imports: [FontAwesomeModule, MatButtonModule],
  templateUrl: './slide1.html',
  styleUrl: './slide1.scss',
})
export class Slide1 {
  constructor(public responsive: ResponsiveService) {}

  faArrow = faChevronDown;

  links = {
    contact: 'mailto:chelsearmay51@gmail.com',
    github: 'https://github.com/chelseawr',
    linkedin: 'https://www.linkedin.com/in/chelseawr/',
    fileName: 'ChelseaMay2026-resume.pdf',
    resume:
      'https://public-cdev.s3.us-east-2.amazonaws.com/ChelseaMay2026-resume.pdf',
  };

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

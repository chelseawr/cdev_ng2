import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { ScrollService } from '../services/scroll.service';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  constructor(
    public responsive: ResponsiveService,
    public scroll: ScrollService,
  ) {}

  faArrow = faChevronDown;

  links = {
    contact: 'mailto:chelsearmay51@gmail.com',
    github: 'https://github.com/chelseawr',
    linkedin: 'https://www.linkedin.com/in/chelseawr/',
    fileName: 'ChelseaMay2026-resume.pdf',
    resume:
      'https://public-cdev.s3.us-east-2.amazonaws.com/ChelseaMay2026-resume.pdf',
  };

  scrollTo(id: string): void {
    this.scroll.scrollTo(id);
  }
}

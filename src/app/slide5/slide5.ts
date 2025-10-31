import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';
type EduItem = {
  school: string;
  credential: string;
  date: string; // human-readable
  inProgress?: boolean;
};

@Component({
  selector: 'app-slide5',
  imports: [],
  templateUrl: './slide5.html',
  styleUrl: './slide5.scss',
})
export class Slide5 {
  constructor(public responsive: ResponsiveService) {}
  items: EduItem[] = [
    {
      school: 'Dakota State University',
      credential: 'Bachelor of Computer Science',
      date: 'Senior, expected 2026',
      inProgress: true,
    },
    {
      school: 'Department of Labor',
      credential: 'Internetworking Technician Certification',
      date: 'March 2017',
    },
    {
      school: 'Portland Community College',
      credential: 'Associate of General Studies',
      date: 'April 2014',
    },
  ];
}

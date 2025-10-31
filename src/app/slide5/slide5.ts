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
      date: 'In progress',
      inProgress: true,
    },
    {
      school: 'Department of Labor Certification',
      credential: 'Internetworking Technician',
      date: 'October 2016',
    },
    {
      school: 'Portland Community College',
      credential: 'Associates of General Studies',
      date: 'June 2011',
    },
  ];
}

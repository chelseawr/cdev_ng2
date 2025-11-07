import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';
import {
  faArrowLeft,
  faArrowRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-slide6',
  imports: [FontAwesomeModule],
  templateUrl: './slide6.html',
  styleUrl: './slide6.scss',
})
export class Slide6 {
  constructor(public responsive: ResponsiveService) {}
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  iconFor(i: number, p: any): IconDefinition {
    const isOpen = this.openId === p.id;
    return isOpen
      ? faChevronDown
      : i % 2 === 0
      ? faChevronRight
      : faChevronLeft;
  }
  projects = [
    {
      id: 'farm',
      title: 'Hay May Farm',
      link: 'https://www.haymayfarm.com',
      image: 'assets/farm-cap.JPG',
      aboutText:
        'The public site for our family farm, built with React 20 and Vite for fast client-side rendering. Deployed on AWS S3 + CloudFront with a simple, responsive design that continues to evolve as we expand the farm’s offerings.',
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      link: 'https://chelsea.dev/',
      image: 'assets/portfolio-cap.JPG',
      aboutText:
        'This portfolio is itself a live example of my front-end work, first launched in 2024 and iterated through multiple UI updates. Features a collapsible mobile UX built with Angular’s new template control flow and a custom responsive service.',
    },
    {
      id: 'pandas',
      title: 'Messenger Data Analyzer',
      image: '',
      aboutText:
        'A Python project from 2022 using Pandas + Plotly to explore exported Facebook Messenger data. Provides interactive CLI menus and visualizations for message stats, top contacts, and activity pattern',
    },
    {
      id: 'mirror',
      title: 'Smart Mirror',
      aboutText:
        'A wall-mounted dashboard app rebuilt in 2022 with Angular 13 after an early 2019 version using AngularJS. Aggregates APIs for weather, commute times, to-do lists, and calendars into a real-time home display.',
      image: '',
    },
  ];

  openId: string | null = null;

  onToggle(id: string, ev: MouseEvent) {
    ev.preventDefault();
    this.openId = this.openId === id ? null : id;
  }
}

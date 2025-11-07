import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Role, ROLES } from './roles.data';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-slide3',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './slide3.html',
  styleUrl: './slide3.scss',
})
export class Slide3 {
  constructor(public responsive: ResponsiveService) {}

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  roles: Role[] = ROLES;
  openId: string | null = null;

  iconFor(i: number, role: Role): IconDefinition {
    const isOpen = this.openId === role.id;
    return isOpen
      ? faChevronDown
      : i % 2 === 0
      ? faChevronRight
      : faChevronLeft;
  }
  onToggle(id: string, ev: MouseEvent) {
    ev.preventDefault();
    this.openId = this.openId === id ? null : id;
  }
}

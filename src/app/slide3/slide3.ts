import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
  roles: Role[] = ROLES;
  openId: string | null = null;

  onToggle(id: string, ev: MouseEvent) {
    ev.preventDefault();
    this.openId = this.openId === id ? null : id;
  }
}

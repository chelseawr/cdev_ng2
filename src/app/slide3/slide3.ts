import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slide3',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './slide3.html',
  styleUrl: './slide3.scss',
})
export class Slide3 {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
}

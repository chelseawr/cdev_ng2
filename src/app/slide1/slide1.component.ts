import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-slide1',
  standalone: true,
  imports: [FontAwesomeModule, BoxComponent],
  templateUrl: './slide1.component.html',
  styleUrl: './slide1.component.scss',
})
export class Slide1Component {}

import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-slide2',
  standalone: true,
  imports: [FontAwesomeModule, BoxComponent],
  templateUrl: './slide2.component.html',
  styleUrl: './slide2.component.scss',
})
export class Slide2Component {}

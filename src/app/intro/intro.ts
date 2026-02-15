import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResponsiveService } from '../responsive.service';
@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class IntroComponent {
  readonly responsive = inject(ResponsiveService);
}

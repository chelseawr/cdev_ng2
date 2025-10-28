import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDatabase,
  faDisplay,
  faFlask,
  faCloud,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slide4',
  imports: [FontAwesomeModule],
  templateUrl: './slide4.html',
  styleUrl: './slide4.scss',
})
export class Slide4 {
  faDisplay = faDisplay;
  faDatabase = faDatabase;
  faFlask = faFlask; // flask-gear pro
  faCloud = faCloud; // cloud-binary pro
  faNetworkWired = faNetworkWired; // cloud-binary pro
}

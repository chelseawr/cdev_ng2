import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide3',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './slide3.html',
  styleUrl: './slide3.scss',
})
export class Slide3 {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  isPhonePortrait = false;
  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;
      if (result.matches) this.isPhonePortrait = true;
    });
  }
}

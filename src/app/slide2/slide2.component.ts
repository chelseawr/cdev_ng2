import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule, NgClass } from '@angular/common';
@Component({
  selector: 'app-slide2',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './slide2.component.html',
  styleUrl: './slide2.component.scss',
})
export class Slide2Component implements OnInit {
  isPhonePortrait = false;
  constructor(private responsive: BreakpointObserver) {}
  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;
      if (result.matches) this.isPhonePortrait = true;
    });
  }
}

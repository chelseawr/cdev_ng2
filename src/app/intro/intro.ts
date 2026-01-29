import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class IntroComponent implements OnInit {
  isPhonePortrait = false;
  constructor(private responsive: BreakpointObserver) {}
  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;
      if (result.matches) this.isPhonePortrait = true;
    });
  }
}

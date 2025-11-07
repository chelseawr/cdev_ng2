import { Injectable, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class ResponsiveService {
  readonly isPhonePortrait = signal(false);
  readonly isDesktop = signal(false);

  constructor(private bp: BreakpointObserver) {
    const body = document.body;

    this.bp
      .observe([Breakpoints.HandsetPortrait, Breakpoints.Web])
      .subscribe((state) => {
        const phone = !!state.breakpoints[Breakpoints.HandsetPortrait];
        const desktop = !!state.breakpoints[Breakpoints.WebLandscape];

        this.isPhonePortrait.set(phone);
        this.isDesktop.set(desktop);

        // Apply/remove global body classes
        body.classList.toggle('phone-portrait', phone);
        body.classList.toggle('desktop', desktop);
      });
  }
}

import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

  scrollTo(
    id: string,
    options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' },
  ): boolean {
    const el = this.doc.getElementById(id);
    if (!el) return false;
    el.scrollIntoView(options);
    return true;
  }
}

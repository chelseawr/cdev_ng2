import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
  let service: ScrollService;
  let doc: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollService],
    });

    service = TestBed.inject(ScrollService);
    doc = TestBed.inject(DOCUMENT);

    vi.restoreAllMocks();
  });
  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('returns false when target element is missing', () => {
    vi.spyOn(doc, 'getElementById').mockReturnValue(null);

    const result = service.scrollTo('missing');

    expect(result).toBe(false);
    expect(doc.getElementById).toHaveBeenCalledWith('missing');
  });

  it('calls scrollIntoView with default options when element exists', () => {
    const el = document.createElement('div');
    const scrollIntoViewSpy = vi.fn();
    (
      el as unknown as {
        scrollIntoView: (opts?: ScrollIntoViewOptions) => void;
      }
    ).scrollIntoView = scrollIntoViewSpy;

    vi.spyOn(doc, 'getElementById').mockReturnValue(el);

    const result = service.scrollTo('intro');

    expect(result).toBe(true);
    expect(scrollIntoViewSpy).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('passes custom options through', () => {
    const el = document.createElement('div');
    const scrollIntoViewSpy = vi.fn();
    (
      el as unknown as {
        scrollIntoView: (opts?: ScrollIntoViewOptions) => void;
      }
    ).scrollIntoView = scrollIntoViewSpy;

    vi.spyOn(doc, 'getElementById').mockReturnValue(el);

    service.scrollTo('intro', { behavior: 'auto', block: 'center' });

    expect(scrollIntoViewSpy).toHaveBeenCalledWith({
      behavior: 'auto',
      block: 'center',
    });
  });
});

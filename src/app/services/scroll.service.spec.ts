import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
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
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('returns false when target element is missing', () => {
    spyOn(doc, 'getElementById').and.returnValue(null);

    const result = service.scrollTo('missing');

    expect(result).toBe(false);
    expect(doc.getElementById).toHaveBeenCalledWith('missing');
  });

  it('calls scrollIntoView with default options when element exists', () => {
    const el = document.createElement('div');
    const scrollIntoViewSpy = jasmine.createSpy('scrollIntoView');
    el.scrollIntoView = scrollIntoViewSpy;

    spyOn(doc, 'getElementById').and.returnValue(el);

    const result = service.scrollTo('intro');

    expect(result).toBe(true);
    expect(scrollIntoViewSpy).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('passes custom options through', () => {
    const el = document.createElement('div');
    const scrollIntoViewSpy = jasmine.createSpy('scrollIntoView');
    el.scrollIntoView = scrollIntoViewSpy;

    spyOn(doc, 'getElementById').and.returnValue(el);

    service.scrollTo('intro', { behavior: 'auto', block: 'center' });

    expect(scrollIntoViewSpy).toHaveBeenCalledWith({
      behavior: 'auto',
      block: 'center',
    });
  });
});

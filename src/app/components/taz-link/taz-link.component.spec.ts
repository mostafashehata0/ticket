import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TazLinkComponent } from './taz-link.component';

describe('TazLinkComponent', () => {
  let component: TazLinkComponent;
  let fixture: ComponentFixture<TazLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TazLinkComponent]
    });
    fixture = TestBed.createComponent(TazLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

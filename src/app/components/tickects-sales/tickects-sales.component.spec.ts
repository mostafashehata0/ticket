import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickectsSalesComponent } from './tickects-sales.component';

describe('TickectsSalesComponent', () => {
  let component: TickectsSalesComponent;
  let fixture: ComponentFixture<TickectsSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TickectsSalesComponent]
    });
    fixture = TestBed.createComponent(TickectsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaznumComponent } from './taznum.component';

describe('TaznumComponent', () => {
  let component: TaznumComponent;
  let fixture: ComponentFixture<TaznumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaznumComponent]
    });
    fixture = TestBed.createComponent(TaznumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

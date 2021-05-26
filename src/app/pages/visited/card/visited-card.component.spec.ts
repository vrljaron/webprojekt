import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedCardComponent } from './visited-card.component';

describe('VisitedCardComponent', () => {
  let component: VisitedCardComponent;
  let fixture: ComponentFixture<VisitedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

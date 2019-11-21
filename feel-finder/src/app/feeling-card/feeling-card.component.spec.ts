import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingCardComponent } from './feeling-card.component';

describe('FeelingCardComponent', () => {
  let component: FeelingCardComponent;
  let fixture: ComponentFixture<FeelingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

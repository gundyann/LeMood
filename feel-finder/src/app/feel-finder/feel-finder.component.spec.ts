import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelFinderComponent } from './feel-finder.component';

describe('FeelFinderComponent', () => {
  let component: FeelFinderComponent;
  let fixture: ComponentFixture<FeelFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

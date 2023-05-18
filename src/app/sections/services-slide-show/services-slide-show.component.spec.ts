import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSlideShowComponent } from './services-slide-show.component';

describe('ServicesSlideShowComponent', () => {
  let component: ServicesSlideShowComponent;
  let fixture: ComponentFixture<ServicesSlideShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSlideShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

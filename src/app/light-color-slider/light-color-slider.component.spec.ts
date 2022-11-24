import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightColorSliderComponent } from './light-color-slider.component';

describe('LightColorSliderComponent', () => {
  let component: LightColorSliderComponent;
  let fixture: ComponentFixture<LightColorSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightColorSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightColorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyGraphicComponent } from './hourly-graphic.component';

describe('HourlyGraphicComponent', () => {
  let component: HourlyGraphicComponent;
  let fixture: ComponentFixture<HourlyGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

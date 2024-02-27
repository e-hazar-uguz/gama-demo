import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyGraphicComponent } from './daily-graphic.component';

describe('DailyGraphicComponent', () => {
  let component: DailyGraphicComponent;
  let fixture: ComponentFixture<DailyGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

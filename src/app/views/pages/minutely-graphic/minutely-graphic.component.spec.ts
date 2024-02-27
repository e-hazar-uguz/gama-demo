import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutelyGraphicComponent } from './minutely-graphic.component';

describe('MinutelyGraphicComponent', () => {
  let component: MinutelyGraphicComponent;
  let fixture: ComponentFixture<MinutelyGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinutelyGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinutelyGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

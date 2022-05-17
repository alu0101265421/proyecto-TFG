import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxCongresoComponent } from './ux-congreso.component';

describe('UxCongresoComponent', () => {
  let component: UxCongresoComponent;
  let fixture: ComponentFixture<UxCongresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxCongresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxCongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

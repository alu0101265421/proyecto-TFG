import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstCongresoComponent } from './est-congreso.component';

describe('EstCongresoComponent', () => {
  let component: EstCongresoComponent;
  let fixture: ComponentFixture<EstCongresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstCongresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstCongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

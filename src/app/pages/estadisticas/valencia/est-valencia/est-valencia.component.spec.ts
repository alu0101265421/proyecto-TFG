import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstValenciaComponent } from './est-valencia.component';

describe('EstValenciaComponent', () => {
  let component: EstValenciaComponent;
  let fixture: ComponentFixture<EstValenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstValenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstValenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxValenciaComponent } from './ux-valencia.component';

describe('UxValenciaComponent', () => {
  let component: UxValenciaComponent;
  let fixture: ComponentFixture<UxValenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxValenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxValenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

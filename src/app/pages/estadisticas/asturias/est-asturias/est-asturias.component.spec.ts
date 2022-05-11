import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstAsturiasComponent } from './est-asturias.component';

describe('EstAsturiasComponent', () => {
  let component: EstAsturiasComponent;
  let fixture: ComponentFixture<EstAsturiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstAsturiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstAsturiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

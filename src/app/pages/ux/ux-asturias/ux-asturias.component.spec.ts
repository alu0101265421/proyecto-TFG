import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxAsturiasComponent } from './ux-asturias.component';

describe('UxAsturiasComponent', () => {
  let component: UxAsturiasComponent;
  let fixture: ComponentFixture<UxAsturiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxAsturiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxAsturiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

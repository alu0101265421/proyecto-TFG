import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxMadridComponent } from './ux-madrid.component';

describe('UxMadridComponent', () => {
  let component: UxMadridComponent;
  let fixture: ComponentFixture<UxMadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxMadridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

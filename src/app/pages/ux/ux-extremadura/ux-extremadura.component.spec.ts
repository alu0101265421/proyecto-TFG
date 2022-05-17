import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxExtremaduraComponent } from './ux-extremadura.component';

describe('UxExtremaduraComponent', () => {
  let component: UxExtremaduraComponent;
  let fixture: ComponentFixture<UxExtremaduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxExtremaduraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxExtremaduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

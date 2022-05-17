import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxCanariasComponent } from './ux-canarias.component';

describe('UxCanariasComponent', () => {
  let component: UxCanariasComponent;
  let fixture: ComponentFixture<UxCanariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxCanariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxCanariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

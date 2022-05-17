import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxAndaluciaComponent } from './ux-andalucia.component';

describe('UxAndaluciaComponent', () => {
  let component: UxAndaluciaComponent;
  let fixture: ComponentFixture<UxAndaluciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxAndaluciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxAndaluciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

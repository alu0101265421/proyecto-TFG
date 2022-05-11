import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstAndaluciaComponent } from './est-andalucia.component';

describe('EstAndaluciaComponent', () => {
  let component: EstAndaluciaComponent;
  let fixture: ComponentFixture<EstAndaluciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstAndaluciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstAndaluciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

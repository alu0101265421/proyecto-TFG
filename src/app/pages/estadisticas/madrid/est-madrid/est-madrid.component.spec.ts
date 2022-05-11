import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstMadridComponent } from './est-madrid.component';

describe('EstMadridComponent', () => {
  let component: EstMadridComponent;
  let fixture: ComponentFixture<EstMadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstMadridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

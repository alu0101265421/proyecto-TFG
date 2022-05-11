import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstExtremaduraComponent } from './est-extremadura.component';

describe('EstExtremaduraComponent', () => {
  let component: EstExtremaduraComponent;
  let fixture: ComponentFixture<EstExtremaduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstExtremaduraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstExtremaduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

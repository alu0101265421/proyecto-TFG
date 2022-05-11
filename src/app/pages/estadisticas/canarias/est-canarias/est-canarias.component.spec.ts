import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstCanariasComponent } from './est-canarias.component';

describe('EstCanariasComponent', () => {
  let component: EstCanariasComponent;
  let fixture: ComponentFixture<EstCanariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstCanariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstCanariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

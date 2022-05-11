import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstCatalunaComponent } from './est-cataluna.component';

describe('EstCatalunaComponent', () => {
  let component: EstCatalunaComponent;
  let fixture: ComponentFixture<EstCatalunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstCatalunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstCatalunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

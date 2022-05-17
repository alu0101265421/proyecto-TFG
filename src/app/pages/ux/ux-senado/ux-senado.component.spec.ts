import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxSenadoComponent } from './ux-senado.component';

describe('UxSenadoComponent', () => {
  let component: UxSenadoComponent;
  let fixture: ComponentFixture<UxSenadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxSenadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxSenadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

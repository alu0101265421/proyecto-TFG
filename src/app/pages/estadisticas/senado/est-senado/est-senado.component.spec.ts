import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstSenadoComponent } from './est-senado.component';

describe('EstSenadoComponent', () => {
  let component: EstSenadoComponent;
  let fixture: ComponentFixture<EstSenadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstSenadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstSenadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

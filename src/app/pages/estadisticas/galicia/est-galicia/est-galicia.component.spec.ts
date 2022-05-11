import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGaliciaComponent } from './est-galicia.component';

describe('EstGaliciaComponent', () => {
  let component: EstGaliciaComponent;
  let fixture: ComponentFixture<EstGaliciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstGaliciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstGaliciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

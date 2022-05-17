import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxGaliciaComponent } from './ux-galicia.component';

describe('UxGaliciaComponent', () => {
  let component: UxGaliciaComponent;
  let fixture: ComponentFixture<UxGaliciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxGaliciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxGaliciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

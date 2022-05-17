import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxCatalunaComponent } from './ux-cataluna.component';

describe('UxCatalunaComponent', () => {
  let component: UxCatalunaComponent;
  let fixture: ComponentFixture<UxCatalunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxCatalunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UxCatalunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

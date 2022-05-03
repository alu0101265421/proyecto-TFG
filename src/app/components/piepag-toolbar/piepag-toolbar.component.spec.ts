import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiepagToolbarComponent } from './piepag-toolbar.component';

describe('PiepagToolbarComponent', () => {
  let component: PiepagToolbarComponent;
  let fixture: ComponentFixture<PiepagToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiepagToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiepagToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

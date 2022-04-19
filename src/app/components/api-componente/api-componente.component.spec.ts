import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiComponenteComponent } from './api-componente.component';

describe('ApiComponenteComponent', () => {
  let component: ApiComponenteComponent;
  let fixture: ComponentFixture<ApiComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

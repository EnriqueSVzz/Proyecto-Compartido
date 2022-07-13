import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaNosComponent } from './acerca-nos.component';

describe('AcercaNosComponent', () => {
  let component: AcercaNosComponent;
  let fixture: ComponentFixture<AcercaNosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaNosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

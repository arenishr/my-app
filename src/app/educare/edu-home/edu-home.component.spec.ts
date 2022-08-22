import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduHomeComponent } from './edu-home.component';

describe('EduHomeComponent', () => {
  let component: EduHomeComponent;
  let fixture: ComponentFixture<EduHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

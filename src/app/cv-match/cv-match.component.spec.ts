import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMatchComponent } from './cv-match.component';

describe('CvMatchComponent', () => {
  let component: CvMatchComponent;
  let fixture: ComponentFixture<CvMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

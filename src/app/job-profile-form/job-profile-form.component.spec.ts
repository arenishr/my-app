import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProfileFormComponent } from './job-profile-form.component';

describe('JobProfileFormComponent', () => {
  let component: JobProfileFormComponent;
  let fixture: ComponentFixture<JobProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobProfileFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

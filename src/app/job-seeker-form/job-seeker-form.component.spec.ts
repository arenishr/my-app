import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerFormComponent } from './job-seeker-form.component';

describe('JobSeekerFormComponent', () => {
  let component: JobSeekerFormComponent;
  let fixture: ComponentFixture<JobSeekerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSeekerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSeekerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

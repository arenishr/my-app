import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-profile-form',
  templateUrl: './job-profile-form.component.html',
  styleUrls: ['./job-profile-form.component.css']
})
export class JobProfileFormComponent implements OnInit {

  profileForm = new FormGroup({
    title: new FormControl(''),
    sector: new FormControl(''),
    jobdetail: new FormGroup({
      qualification: new FormControl(''),
      experience: new FormControl(''),
      skills: new FormControl(''),
      license: new FormControl('')
    })
  });

  updateForm(){
console.log(this.profileForm.value);

this.jobservice.saveJob(this.profileForm.value).subscribe((result: any)=>{
  console.log("Save JOB in server");
  console.log(result);
})
    
  }

  constructor(private jobservice: JobService) { }

  ngOnInit() {
    this.jobservice.getData().subscribe((result: any) => {
      console.log("Fetch JOB from server");
      console.log(result);

    });
  }

}

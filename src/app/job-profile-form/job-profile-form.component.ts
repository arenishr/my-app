import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CVService } from '../services/cv.service';


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
console.log(this.profileForm);
    this.cv.getData().subscribe(result => {

    });

  }

  constructor(private cv: CVService) { }

  ngOnInit(): void {
  }

}

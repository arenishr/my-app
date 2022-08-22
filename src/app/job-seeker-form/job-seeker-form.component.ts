import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CV } from '../model/cv';
import { CVService } from '../services/cv.service';

@Component({
  selector: 'app-job-seeker-form',
  templateUrl: './job-seeker-form.component.html',
  styleUrls: ['./job-seeker-form.component.css']
})
export class JobSeekerFormComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor(private cv: CVService) { }

  ngOnInit(): void {
  }

  updateForm(){
    let cv = new CV(1,"test","job");
    this.cv.saveCV(cv).subscribe(result => {

      
    });
  }
}

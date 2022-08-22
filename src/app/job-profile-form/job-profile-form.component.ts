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
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  updateForm(){

    this.cv.getData().subscribe(result => {

    });

  }

  constructor(private cv: CVService) { }

  ngOnInit(): void {
  }

}

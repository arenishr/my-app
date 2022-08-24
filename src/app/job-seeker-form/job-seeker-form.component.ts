import { HttpClient, HttpHeaders } from '@angular/common/http';
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
// 	id 	name 	education_1 	education_2 	id_type 	id_no 	current_job 	experience 	skills 	languages 
  cvForm = new FormGroup({
    name: new FormControl(''),
    education_1: new FormControl(''),
    education_2: new FormControl(''),
    id_type: new FormControl(''),
    id_no: new FormControl(''),
    current_job: new FormControl(''),
    experience: new FormControl(''),
    skills: new FormControl(''),
    languages: new FormControl('')
   
  });

  constructor(private cv: CVService,private http: HttpClient) { }

  ngOnInit() {
    this.cv.getData().subscribe((result: any) => {
      console.log("Fetch CV from server");
      console.log(result);

    });
  }

  updateForm(){
    
    this.cv.saveCV(this.cvForm.value).subscribe((result: any)=>{
      console.log("Save CV in server");
      console.log(result);
    });
  }
}

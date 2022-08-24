import { HttpClient } from '@angular/common/http';
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
    let objects=this.http.post("http://localhost:8080/api/savejob",{responseType: 'text'}).subscribe(res=>{
      console.log(res);
    })
  }

  updateForm(){
    let cv = new CV(1,"test","job");
    this.cv.saveCV(cv).subscribe(result => {

      
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobList:any[]=[];
  constructor(private jobservice: JobService) { }

  ngOnInit() {
    this.jobservice.getData().subscribe((result: any) => {
      this.jobList=result;
      console.log("Fetch JOB from server");
      console.log(result);

    });
  }

}

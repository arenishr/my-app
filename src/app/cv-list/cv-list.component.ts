import { Component, OnInit } from '@angular/core';
import { CVService } from '../services/cv.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit {
  cvList:any[]=[];
  constructor(private cv: CVService) { }

  ngOnInit() {
    this.cv.getData().subscribe((result: any) => {
      this.cvList=result;
      console.log("Fetch CV from server");
      console.log(result);

    });
  }

}

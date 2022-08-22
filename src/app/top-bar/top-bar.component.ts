import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sum=0;
  sumarray(data:any[]){
    return data.reduce((total,num)=>{
          return total=num+total;
    },0)
  }
  
  summit(){
    this.sum=this.sumarray([1,3,6,7]);
  }

}

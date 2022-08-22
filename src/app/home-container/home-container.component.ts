import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Welcome to Expatriate Forum';
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
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

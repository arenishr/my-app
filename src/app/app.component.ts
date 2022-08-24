import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private http: HttpClient){

  }
ngOnInit() {

  let objects=this.http.get("http://localhost:8080/",{responseType: 'text'}).subscribe(res=>{
    console.log(res);
  })
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { CV } from '../model/cv';


@Injectable({
  providedIn: 'root'
})
export class CVService {

 
  constructor(private http: HttpClient) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
   // headers.append('Authorization' , this.authorizationService.getAuthorizationToken());
   // this.options = new RequestOptions({ headers: headers });
  }

  
  public saveCV(cv: CV): Observable<any> {
    const url = 'http://localhost:8080/api/savejob';
    return this.http.post<any>(url, cv);
  }

  getData():Observable<any>{
//`${this.buildingUnitServiceURL}/${requestId}/building-units-all`
    return this.http.get( 'http://localhost:8080/api/test', {}).pipe(
      map(data=>{
        console.log(data);
        return data;
      })
    )
    
      
 }
  


  private processResponse(response: Response) {
    return <any>response.json();
 }

 private handleError(error: Response | any) {
    console.log(' Error  ' + error);
    let errorList: any[] = [];

    //Bad Request Error via server validation
    if (error.status === 400) {
       errorList = error.json();
    }
    return Observable.throw(errorList);
 }

}
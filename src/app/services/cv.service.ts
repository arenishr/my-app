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
    
  }

  public saveCV(cv: CV): Observable<any> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = 'http://localhost:8080/api/savecv';
    return this.http.post(url,cv,{responseType: 'text'});
    // return this.http.post<any>(url, cv, { headers: headers }).pipe(
    //   map((response) => {
    //     return this.processResponse(response);
    //   })
    // );
    
  }

  getData():Observable<any>{
    return this.http.get( 'http://localhost:8080/api/getcvs', {responseType: 'text'}).pipe(
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

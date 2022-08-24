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


    const httpOptions = {
 	 	headers: new HttpHeaders()
	}

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

	//this.httpClient.post(<url>, <body>, httpOptions);

   // headers.append('Authorization' , this.authorizationService.getAuthorizationToken());
   // this.options = new RequestOptions({ headers: headers });
  }

  
  public saveCV(cv: CV): Observable<any> {

    //post(url: string, body: any, options: { headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined; context?: HttpContext | undefined; observe?: "body" | undefined; params?: HttpParams | { ...; } | undefined; reportProgress?: boolean | undefined; responseType: "arraybuffer"; withCredentials?: boolean | undefined; }


    const httpOptions = {
 	 	headers: new HttpHeaders()
	}

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    

    const url = 'http://localhost:8080/api/savecv';
    return this.http.post(url,cv,{responseType: 'json'});
  }

  getData():Observable<any>{
//`${this.buildingUnitServiceURL}/${requestId}/building-units-all`
    return this.http.get( 'http://localhost:8080/api/test', {responseType: 'text'}).pipe(
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



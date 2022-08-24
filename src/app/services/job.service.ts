import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobProfile } from '../model/jobprofile';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) {}

  public saveJob(jobProfile: JobProfile): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = 'http://localhost:8080/api/savejob';
    return this.http.post(url,jobProfile,{responseType: 'text'});
    // return this.http.post<any>(url, cv, { headers: headers }).pipe(
    //   map((response) => {
    //     return this.processResponse(response);
    //   })
    // );
    // return this.http.post<any>(url, jobProfile, { headers: headers }).pipe(
    //   map((response) => {
    //     return this.processResponse(response);
    //   })
    // );
  }

  getData(): Observable<any> {
    //`${this.buildingUnitServiceURL}/${requestId}/building-units-all`
    return this.http
      .get('http://localhost:8080/api/getjobs', { responseType: 'text' })
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        })
      );
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

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobProfile } from '../model/jobprofile';

export class JobService {
    constructor(private http: HttpClient) { }

      
  public saveJob(jobProfile: JobProfile): Observable<any> {

    //post(url: string, body: any, options: { headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined; context?: HttpContext | undefined; observe?: "body" | undefined; params?: HttpParams | { ...; } | undefined; reportProgress?: boolean | undefined; responseType: "arraybuffer"; withCredentials?: boolean | undefined; }

    const url = 'http://localhost:8080/api/savejob';
    return this.http.post(url,jobProfile,{responseType: 'text'});
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
  }
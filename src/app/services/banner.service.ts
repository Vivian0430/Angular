import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(public http: HttpClient) {}
    urlRoot:any='http://101.200.58.3/librarywebapi/';
       getBannerData():Observable<any>{
            return this.http.get(this.urlRoot + 'advert/list');
   }
}

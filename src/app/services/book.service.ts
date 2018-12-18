import { Injectable } from '@angular/core';
import { RouteSettingService } from './route-setting.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public setting: RouteSettingService, public http: HttpClient) { }

  getBookData():Observable<any>{
    return this.http.get(this.setting.httpUrlRoot + 'section?method=list');
  }
}




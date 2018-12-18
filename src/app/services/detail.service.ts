import { Injectable } from '@angular/core';
import { RouteSettingService } from './route-setting.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  
  constructor(public setting: RouteSettingService, public http: HttpClient) { }

  getBookById(bookId:any):Observable<any>{
    return this.http.get(this.setting.httpUrlRoot + 'book?method=getBookById&id=' + bookId);
  }
}


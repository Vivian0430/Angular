import { Injectable } from '@angular/core';
import { RouteSettingService } from './route-setting.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(public setting: RouteSettingService, public http: HttpClient) { }

  getListData():Observable<any>{
    return this.http.get(this.setting.httpUrlRoot + 'book?method=list');
  }
}

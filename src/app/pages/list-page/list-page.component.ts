import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  list:any[]=[];
  constructor(public ls: ListService) { }

  ngOnInit() {
    this.ls.getListData().subscribe((res:any)=>{
      console.log(res);
       if(res.code == 1){
         this.list = res.result;
         console.log(this.list);
       }
    })
  }

}

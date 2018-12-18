import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail:any={
    image:''
  }
  constructor(public activedRouter : ActivatedRoute,public ds: DetailService) { 
    this.detail.id = this.activedRouter.snapshot.queryParams['id'];
  }
 
  ngOnInit() {
    this.ds.getBookById(this.detail.id).subscribe((res:any)=>{
      console.log(this.detail.id);
      console.log(res);
      if(res.code==1){
        this.detail = res.result;
      }
    })

  }

}

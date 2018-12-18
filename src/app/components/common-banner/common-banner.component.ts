import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-common-banner',
  templateUrl: './common-banner.component.html',
  styleUrls: ['./common-banner.component.css']
})
export class CommonBannerComponent implements OnInit {
  banner=[];
  constructor(public bs: BannerService) { }

  ngOnInit() {
    this.bs.getBannerData().subscribe((res)=>{
      if(res.Code==100){
        this.banner=res.Data;
        console.log(this.banner);
      }
    })
  }
   
}

import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  book=[];
  constructor(public bs: BookService) { }

  ngOnInit() {
   this.bs.getBookData().subscribe((res)=>{
    if(res.code==1){
         this.book=res.result;
    }
   })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mine-page',
  templateUrl: './mine-page.component.html',
  styleUrls: ['./mine-page.component.css']
})
export class MinePageComponent implements OnInit {
  name:any= JSON.parse(sessionStorage.getItem("user"));
  constructor(public router: Router) { }
  
  ngOnInit() {
  }
  loginOut():any{
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("pwd");
    this.router.navigate(['/login']);
  }
}

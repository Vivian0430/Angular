import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // formModel:FormGroup;
  // txtPhone:FormControl;
  // txtPassword:FormControl;
  txtphone:any;
  txtpassword:any;
  constructor(public router: Router,public ds: LoginService) {
    // this.txtPhone = new FormControl('',[Validators.required,Validators.pattern(/^1[35789]\d{9}$/)]);
   
    // this.txtPassword = new FormControl('',[Validators.required,Validators.pattern(/^\d{6}$/)]);
    // this.formModel = new FormGroup({
    //      phone:this.txtPhone,
    //      password:this.txtPassword
    // });
   }
  
  
  ngOnInit() {
    // this.ds.getUserData(this.phone,this.password).subscribe((res)=>{
    //   console.log(res);
    //     if(res.code==1){
    //       this.user=res.result;
    //     }
    // })
  }
  login():any{
    if(this.txtphone && this.txtpassword){
      sessionStorage.setItem('user', JSON.stringify(this.txtphone));
      sessionStorage.setItem('pwd',JSON.stringify(this.txtpassword));
      this.router.navigate(['/mine']);
    }
  }

  submitForm(formModel:FormGroup):void{

  }
}

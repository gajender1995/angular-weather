import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'
import * as MyModule from './exter.js';

console.log('my value is', MyModule.value); 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./css/style.css']
})
export class LoginComponent implements OnInit,user {
  list : any;
  constructor(private authService:AuthService) {
 
   }
 
  username : string;
  password : string;
  model = {
    username : null,
    password : null
  }

  ngOnInit() {
    console.log("Login");

  }

  onSubmit(heroForm) { debugger; 
 
  if(heroForm.username == 'demo' && heroForm.password == 'demo'){
  this.authService.setLogin(true); alert("Success")}
  else{
  this.authService.setLogin(false);
  alert("try with user demo and pwd demo")
  }
  }

}

interface user {
  username : string,
  password : string
}

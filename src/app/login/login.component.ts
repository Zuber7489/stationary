import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public http: HttpClient, public route: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  data;
  login() {
    console.log(this.loginForm.value);
    this.http.get('http://localhost:3000/posts',this.loginForm.value).subscribe(res=>{
      const user = res.find((a:any)=>{
return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        alert('login Succesfull')
        this.route.navigate(['home'])
      }else{
        alert('UserName and password incorrect Plz try Again')
      }

    })
  }




}

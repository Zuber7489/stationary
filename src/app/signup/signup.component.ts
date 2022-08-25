import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  

  constructor(public http:HttpClient, public  route:Router) { }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    number: new FormControl('',Validators.required),
    
    password: new FormControl('',Validators.required)
  })


  signUp(){
    this.http.post('http://localhost:3000/posts',this.signupForm.value).subscribe(res=>{
      alert("Student Registered Successfully");
      this.signupForm.reset();
      this.route.navigate(['login'])
    })
  }

}

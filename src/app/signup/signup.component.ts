import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(public http: HttpClient, public route: Router) { }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    name: new FormControl('', Validators.minLength(8)),
    email: new FormControl('', Validators.pattern(this.emailPattern)),
    number: new FormControl('', Validators.required),

    password: new FormControl('', Validators.required)
  })

  get name() {
    return this.signupForm.get('name');
  }
  get email() {
    return this.signupForm.get('email');
  }

  signUp() {
    this.http.post('http://localhost:3000/posts', this.signupForm.value).subscribe(res => {
      alert("Student Registered Successfully");
      this.signupForm.reset();
      this.route.navigate(['login'])
    })
  }

}

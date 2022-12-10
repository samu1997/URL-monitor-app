import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.loginForm.value);
  }

  gotoSignUp() {
    this.router.navigateByUrl('/user/signup');
  }
}

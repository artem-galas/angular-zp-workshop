import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'ngwzp-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    this.buildSignInForm();
  }

  public buildSignInForm() {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  public submitSignInForm() {
    if (this.signInForm.valid) {
      this.authService
        .signInUser(this.signInForm.value)
        .subscribe(res => {
          console.log(res);
        })
    }
  }

}

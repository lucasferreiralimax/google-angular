import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  textInput: any = false;
  error: any = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      user: ['lucasferreiralimax@gmail.com', [
        Validators.required
      ]]
    })
  }

  ngOnInit(): void {
    this.textInput = this.loginForm.controls['user'].value
  }

  handleChange(e: any) {
    this.textInput = e.target.value ? true : false;
    this.error = !this.loginForm.controls['user'].value;
  }

  onSubmitLogin() {
    this.error = !this.loginForm.controls['user'].value;
  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    console.log(this.loginForm.value);
    if(this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }

  viewErrorInput(text:string) {
    return this.loginForm.get(text)?.invalid && this.loginForm.get(text)?.touched;
  }


}

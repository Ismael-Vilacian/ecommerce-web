import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGuardService } from '../guards/auth.guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private fb: FormBuilder,         // {3}
    private authService: AuthGuardService // {4}
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.formLogin.get(field)?.valid && this.formLogin.get(field)?.touched) ||
      (this.formLogin.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value); // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }

}

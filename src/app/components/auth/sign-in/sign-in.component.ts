import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public message = '';
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  onSignIn(form: NgForm) {
    if (
      this.authService.emailRegex.test(form.value.email) &&
      this.authService.passwordRegex.test(form.value.password)
    ) {
      this.authService.SignIn(form.value.email, form.value.password);
      this.message = 'No account is registered with this email';
    } else {
      this.message = 'Email or password is invalid';
    }
  }
}

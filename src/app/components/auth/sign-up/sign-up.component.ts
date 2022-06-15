import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public message = '';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  onSignUp(form: NgForm) {
    if (
      this.authService.emailRegex.test(form.value.email) &&
      this.authService.passwordRegex.test(form.value.password)
    ) {
      if (form.value.password != form.value.confirmPassword) {
        this.message = 'Please re-enter your password correctly';
        return;
      }
      this.authService.SignUp(form.value.email, form.value.password);
      return;
    }
    this.message = 'Please correct the indicated errors and try again';
  }
}

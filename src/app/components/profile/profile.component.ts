import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { default as countries } from '../../shared/countries.json';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public countries: { name: string; code: string }[] = countries;
  public idType = '';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  get isComplete(): boolean {
    return true;
  }

  get isVerified(): boolean {
    return false;
  }
}

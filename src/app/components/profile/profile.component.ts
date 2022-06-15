import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  DocumentSnapshot,
} from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';
import { default as countries } from '../../shared/countries.json';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public countries: { name: string; code: string }[] = countries;
  public idType = '';
  public user: any;
  public userRef: AngularFirestoreDocument<any>;
  public userData: User = {
    uid: '',
    email: '',
    photoURL: '',
    emailVerified: false,
    dob: undefined,
    firstName: '',
    gender: '',
    lastName: '',
    maritalStatus: '',
    nationalId: '',
    nationality: '',
    passport: '',
    verified: false,
  };
  public initData: User = { ...this.userData };

  constructor(public authService: AuthService, public afs: AngularFirestore) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.userRef = this.afs.doc(`users/${this.user.uid}`);
    this.userRef.get().subscribe((snapShot: DocumentSnapshot<any>) => {
      this.userData = {
        ...this.userData,
        ...snapShot.data(),
      };
      this.initData = {
        ...this.initData,
        ...snapShot.data(),
      };
    });
  }

  ngOnInit(): void {}

  get complete(): boolean {
    return (
      this.userData.photoURL !== '' &&
      this.userData.emailVerified === true &&
      this.userData.dob !== undefined &&
      this.userData.firstName !== '' &&
      this.userData.lastName !== '' &&
      this.userData.gender !== '' &&
      this.userData.maritalStatus !== '' &&
      this.userData.nationality !== '' &&
      (this.userData.nationalId !== '' || this.userData.passport !== '')
    );
  }

  get verificationStatus(): number {
    if (this.userData.verified) return 3;
    if (this.userData.passport != '') return 2;
    if (this.userData.nationalId != '') return 2;
    return 1;
  }

  saveChanges() {
    this.userRef = this.afs.doc(`users/${this.user.uid}`);
    this.userRef
      .update(this.userData)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  }
  discardChanges() {
    this.userData = { ...this.initData };
  }
}

export interface User {
  uid: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
  dob?: Date;
  firstName?: string;
  gender?: string;
  lastName?: string;
  maritalStatus?: string;
  nationalId?: string;
  nationality?: string;
  passport?: string;
  verified?: boolean;
}

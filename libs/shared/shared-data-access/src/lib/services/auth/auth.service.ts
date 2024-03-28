import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  user,
  UserCredential
} from '@angular/fire/auth';
import { from, map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private user$: Observable<User | null> = user(this.auth);

  public createUserWithEmailAndPassword(email: string, password: string): Observable<User> {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
      .pipe(map((credentials: UserCredential) => credentials.user));
  }

  public createTestAccount() {
    const randomNumber = Math.floor(Math.random() * 100);
    const testEmail = `test.${randomNumber}@test.com`;
    const testPassword = btoa('test account' + randomNumber.toString());
    let successText = '';
    return this.createUserWithEmailAndPassword(testEmail, testPassword)
      .pipe(
        switchMap(() => {
          successText = `Your test account has been created successfully and will be active for 24 hours. Please store this email/password combination if you wish to log in with this account again`;
          return of({ email: testEmail, password: testPassword, successText });
        })
      );
  }

  public signInWithEmailAndPassword(email: string, password: string): Observable<User> {
    return from(signInWithEmailAndPassword(this.auth, email, password))
      .pipe(map((credentials: UserCredential) => credentials.user));
  }

  public getUser(): Observable<User | null> {
    return this.user$;
  }

  public isLoggedIn() {
    return !!this.auth.currentUser;
  }

  public signOut() {
    this.auth.signOut();
  }


}

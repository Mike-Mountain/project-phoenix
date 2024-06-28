import { Inject, Injectable } from '@angular/core';
import { ConfigService } from '../../config/config/config.service';
import { BaseHttpService } from '../base-http/base-http.service';
import { UserRegistration } from '../../models/auth.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService<any>{

  private userSrc = new BehaviorSubject({});
  private token: string | undefined;

  public signIn(username: string, password: string) {
    const url = super.setStandardUrl('auth/login');
    console.log('URL', url);
    return super._post(url, {username, password}).pipe(
      tap(token => {
        this.token = token.access_token;
        // Save the token and extract the user
        const payload = this.parseJwt(token.access_token)
        this.userSrc.next(payload);
      })
    );
  }

  public signUp(user: UserRegistration) {
    const url = super.setStandardUrl('auth/register');
    return super._post(url, user);
  }

  public getUser() {
    return this.userSrc.asObservable();
  }

  public isLoggedIn() {
    return !!this.token;
  }

  public signOut() {
    // this.auth.signOut();
  }

  private parseJwt (token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }


}

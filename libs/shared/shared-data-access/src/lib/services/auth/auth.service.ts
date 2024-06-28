import { Inject, Injectable } from '@angular/core';
import { ConfigService } from '../../config/config/config.service';
import { BaseHttpService } from '../base-http/base-http.service';
import { UserRegistration } from '../../models/auth.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService<any> {

  private userSrc = new BehaviorSubject(undefined);
  public token: string | undefined;

  public setUser() {
    const authCookie = document.cookie.match('(^|;)\\s*' + 'hsmauth' + '\\s*=\\s*([^;]+)')?.pop();
    if (authCookie) {
      this.token = authCookie;
      this.userSrc.next(this.parseJwt(authCookie));
    }
  }

  public signIn(username: string, password: string) {
    const url = super.setStandardUrl('auth/login');
    return super._post(url, { username, password }).pipe(
      tap(token => {
        // Save the token and extract the user
        this.token = token.access_token;
        document.cookie = `hsmauth=${this.token}; expires=${new Date().setTime(new Date().getTime() + (7 * 24 * 60 * 60 * 1000))}`;
        this.userSrc.next(this.parseJwt(token.access_token));
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

  public isUsernameAvailable(username: string) {
    const url = super.setStandardUrl('auth/username');
    return super._post(url, { username });
  }

  public signOut() {
    this.token = undefined;
    this.userSrc.next(undefined);
    // Expire the token
    document.cookie = `hsmauth=${this.token}; expires=${new Date().setTime(new Date().getTime() - 1)}`;
  }

  private parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }


}

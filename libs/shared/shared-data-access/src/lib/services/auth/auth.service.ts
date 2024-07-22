import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { User, UserRegistration } from '../../models/auth.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService {

  private userSrc: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  public token: string | undefined;
  public username: string | undefined;

  public setUser() {
    const authCookie = document.cookie.match('(^|;)\\s*' + 'hsmauth' + '\\s*=\\s*([^;]+)')?.pop();
    if (authCookie) {
      this.token = authCookie;
      this.fetchUser(this.parseJwt(authCookie).username);
    }
  }

  public signIn(username: string, password: string) {
    const url = super.setStandardUrl('auth/login');
    super._post(url, { username, password }).subscribe(token => {
      this.token = token.access_token;
      this.username = username;
      this.setCookie(token.access_token);
      this.fetchUser(username);
    });
  }

  public signUp(user: UserRegistration) {
    const url = super.setStandardUrl('auth/register');
    super._post(url, user).subscribe(() => {
      this.signIn(user.username, user.password);
    });
  }

  public getUser(): Observable<User> {
    return this.userSrc.asObservable() as Observable<User>;
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

  public fetchUser(username: string) {
    const url = super.setStandardUrl(`users/${username}`);
    super._get(url).subscribe(
      user => {
        this.username = user.username;
        this.userSrc.next(user);
      });
  }

  public parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  private setCookie(token: string) {
    document.cookie = `hsmauth=${token}; expires=${new Date().setTime(new Date().getTime() + (7 * 24 * 60 * 60 * 1000))}`;
  }
}

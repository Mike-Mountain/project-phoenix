import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { User, UserRegistration } from '../../models/auth.model';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService<any> {

  private userSrc: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  public token: string | undefined;

  public setUser() {
    const authCookie = document.cookie.match('(^|;)\\s*' + 'hsmauth' + '\\s*=\\s*([^;]+)')?.pop();
    if (authCookie) {
      const exp = this.parseJwt(authCookie).exp;
      if (new Date() < new Date(exp)) {
        this.token = authCookie;
        this.fetchUser(this.parseJwt(authCookie).username).subscribe(user => {
          this.userSrc.next(user);
        })
      }
    }
  }

  public signIn(username: string, password: string): Observable<User> {
    const url = super.setStandardUrl('auth/login');
    return super._post(url, { username, password }).pipe(
      switchMap(token => {
        this.token = token.access_token;
        this.setCookie(token.access_token);
        return this.fetchUser(username);
      }),
      tap(user => this.userSrc.next(user))
    );
  }

  public signUp(user: UserRegistration) {
    const url = super.setStandardUrl('auth/register');
    return super._post(url, user).pipe(
      switchMap(token => {
        this.token = token.access_token;
        this.setCookie(token.access_token);
        return this.fetchUser(user.username)
      }),
      tap(user => this.userSrc.next(user))
    );
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

  private fetchUser(username: string): Observable<User> {
    const url = super.setStandardUrl(`users/${username}`);
    return super._get(url);
  }

  private setCookie(token: string) {
    document.cookie = `hsmauth=${token}; expires=${new Date().setTime(new Date().getTime() + (7 * 24 * 60 * 60 * 1000))}`;
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

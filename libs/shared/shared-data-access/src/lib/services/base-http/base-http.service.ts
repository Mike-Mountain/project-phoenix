import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchType } from '../../models/movie-api-params.model';
import { Observable } from 'rxjs';
import { ConfigService } from '../../config/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService<T = any> {

  private configService = inject(ConfigService);
  private http = inject(HttpClient);
  private readonly omdbApiUrl = this.configService.config?.omdbApiUrl;
  private readonly apiUrl = this.configService.config?.apiUrl;

  public setMovieUrl(type: SearchType, query: string, page?: number): string {
    let url = `${this.omdbApiUrl}&${type}=${query}`;
    if (page) {
      url += `&page=${page}`;
    }
    return url;
  }

  public setStandardUrl(fragment: string) {
    return `${this.apiUrl}/${fragment}`;
  }

  public _get<O>(url: string, headers?: HttpHeaders): Observable<T | O> {
    return this.http.get<T | O>(url, { headers });
  }

  public _put(url: string, item: T, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(url, item, { headers });
  }

  public _patch(url: string, item: T, headers?: HttpHeaders): Observable<T> {
    return this.http.patch<T>(url, item, { headers });
  }

  public _post<O>(url: string, item: T, headers?: HttpHeaders): Observable<T | O> {
    return this.http.post<T | O>(url, item, { headers });
  }

  public _delete(url: string): Observable<T | undefined> {
    return this.http.delete<T>(url);
  }


}

import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchType } from '../../models/movie-api-params.model';
import { Observable } from 'rxjs';
import { ConfigService } from '../../config/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService<T> {

  private configService = inject(ConfigService);
  private http = inject(HttpClient);
  // TODO: Firgure out why the config service is not acting as a singleton
  private readonly apiUrl = this.configService.config?.apiUrl || 'http://www.omdbapi.com/?apikey=a55e2dd8';

  public setMovieUrl(type: SearchType, query: string, page?: number): string {
    let url = `${this.apiUrl}&${type}=${query}`;
    if (page) {
      url += `&page=${page}`;
    }
    return url;
  }

  public setStandardUrl(fragment: string) {
    return `${this.apiUrl}/${fragment}`;
  }

  public _get(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, { headers });
  }

  public _put(url: string, item: T, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(url, item, { headers });
  }

  public _post(url: string, item: T, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, item, { headers });
  }

  public _delete(url: string): Observable<T | undefined> {
    return this.http.delete<T>(url);
  }


}

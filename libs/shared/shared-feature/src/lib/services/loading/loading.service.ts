import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSrc = new BehaviorSubject<boolean>(true);

  public setIsLoading(isLoading: boolean): void {
    this.loadingSrc.next(isLoading);
  }

  public loading$(): Observable<boolean> {
    return this.loadingSrc.asObservable();
  }

  public loadingBool(): boolean {
    return this.loadingSrc.getValue();
  }
}

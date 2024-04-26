import { Injectable } from '@angular/core';
import { from, Observable, Observer, ReplaySubject, switchMap, take } from 'rxjs';
import { openDB, IDBPDatabase } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService<T> {

  private db: ReplaySubject<IDBPDatabase> = new ReplaySubject<IDBPDatabase>(1);

  constructor() {
    this.create();
  }

  async create() {
    if (!window.indexedDB) {
      this.db.complete();
    } else {
      const database = indexedDB.open('project_phoenix', 2);
      database.onerror = (err) => {
        this.db.error(err);
        this.db.complete();
      };

      database.onupgradeneeded = (e: any) => {
        const db = e.target.result;
        const objectStore = db.createObjectStore('test', { autoIncrement: true, keyPath: 'id' });
        objectStore.createIndex('id', 'id', { unique: true });
        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('done', 'done', { unique: false });
      };

      this.db.next(await openDB('project_phoenix'));
    }
  }

  get(storeName: string, id: number): Observable<T> {
    return this.db.pipe(
      switchMap(db => {
        if (!db) {
          throw new Error('IndexDB not supported');
        }
        return from(db.get(storeName, id));
      })
    );
  }

  post(storeName: string, value: T): Observable<IDBValidKey> {
    return this.db.pipe(
      switchMap(db => {
        if (!db) {
          throw new Error('IndexDB not supported');
        }
        return from(db.add(storeName, value));
      })
    );
  }

  put(storeName: string, value: T, id: number): Observable<IDBValidKey> {
    return this.db.pipe(
      switchMap(db => {
        if (!db) {
          throw new Error('IndexDB not supported');
        }
        return from(db.put(storeName, value, id));
      })
    );
  }

  putInline(storeName: string, keyName: string, value: any): Observable<IDBValidKey> {
    return this.db.pipe(
      switchMap(db => {
        if (!db) {
          throw new Error('IndexDB not supported');
        }
        return from(db.put(storeName, { [keyName]: value }));
      })
    );
  }

  delete(storeName: string, id: number) {
    return this.db.pipe(
      switchMap(db => {
        if (!db) {
          throw new Error('IndexDB not supported');
        }
        return from(db.delete(storeName, id));
      })
    );
  }
}

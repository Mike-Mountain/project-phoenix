import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService<T> {

  constructor() {
    this.createDb();
  }

  public async createDb() {
    const createStore = this.createObjectStore;
    const db = await openDB('project_phoenix', 3, {
      upgrade(db) {
        createStore(db, 'test', {name: '', id: 0, done: false});
      }
    });
  }

  public async getOne(storeName: string, id: number) {
    const store = await this.getObjectStore(storeName, 'readonly');
    return await store.get(id);
  }

  public async getAll(storeName: string) {
    const store = await this.getObjectStore(storeName, 'readonly');
    return await store.getAll();
  }

  public async post(storeName: string, value: any) {
    const store = await this.getObjectStore(storeName, 'readwrite');
    if (store) {
      // @ts-expect-error: Object is defined
      return await store.add(value);
    } else {
      throw new Error('Store does not exist');
    }
  }

  public async put(storeName: string, value: any) {
    const store = await this.getObjectStore(storeName, 'readwrite');
    if (store) {
      // @ts-expect-error: Object is defined
      return await store.put(value);
    } else {
      throw new Error('Store does not exist');
    }
  }

  public async delete(storeName: string, id: number) {
    const store = await this.getObjectStore(storeName, 'readwrite');
    if (store) {
      // @ts-expect-error: Object is defined
      return await store.delete(id);
    } else {
      throw new Error('Store does not exist');
    }
  }

  private async createObjectStore(db: IDBPDatabase, name: string, model: any) {
    const store = db.createObjectStore(name, { autoIncrement: true, keyPath: 'id' });
    Object.keys(model).forEach((key, idx) => {
      store.createIndex(key, key, { unique: key === 'id' ? true : false });
    });
  }

  private async getObjectStore(storeName: string, mode: IDBTransactionMode) {
    const db = await openDB('project_phoenix');
    const transaction = db.transaction(storeName, mode);
    return transaction.objectStore(storeName);
  }
}

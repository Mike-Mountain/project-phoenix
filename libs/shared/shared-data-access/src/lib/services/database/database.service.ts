import { Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';
import { Budget, BudgetDuration } from '../../models/budget.model';

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
        createStore<Budget>(db, 'budgets', {
          id: 0,
          budgetType: '',
          name: '',
          duration: BudgetDuration.DAY,
          expenses: [],
          income: []
        });
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

  public async post(storeName: string, value: T) {
    const store = await this.getObjectStore(storeName, 'readwrite');
    if (store) {
      // @ts-expect-error: Object is defined
      return await store.add(value);
    } else {
      throw new Error('Store does not exist');
    }
  }

  public async put(storeName: string, value: T) {
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

  private async createObjectStore<T extends object>(db: IDBPDatabase, name: string, model: T) {
    const store = db.createObjectStore(name, { autoIncrement: true, keyPath: 'id' });
    Object.keys(model).forEach((key) => {
      store.createIndex(key, key, { unique: key === 'id' });
    });
  }

  private async getObjectStore(storeName: string, mode: IDBTransactionMode) {
    const db = await openDB('project_phoenix');
    const transaction = db.transaction(storeName, mode);
    return transaction.objectStore(storeName);
  }
}

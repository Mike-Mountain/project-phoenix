import { Injectable } from '@angular/core';
import { BaseHttpService } from '@project-phoenix/shared/shared-data-access';
import { BehaviorSubject } from 'rxjs';
import { Category, CreateList, CreateListItem, List } from '../../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService extends BaseHttpService {
  private listSrc = new BehaviorSubject<List>({} as List);
  private categoriesSrc = new BehaviorSubject<Category[]>([]);

  public getSelectedList() {
    return this.listSrc.asObservable();
  }

  public getCategories() {
    return this.categoriesSrc.asObservable();
  }

  public fetchListById(listId: number) {
    const url = super.setStandardUrl(`lists/${listId}`);
    super._get<List>(url).subscribe(list => this.listSrc.next(list));
  }

  public toggleIsComplete(itemId: number, isComplete: boolean) {
    const url = super.setStandardUrl(`list-items/${itemId}`);
    super._patch(url, { isComplete }).subscribe(list => this.listSrc.next(list));
  }

  public fetchCategories(categoryName: string) {
    const url = super.setStandardUrl(`category/search/${categoryName}`);
    super._get<Category[]>(url).subscribe(categories => this.categoriesSrc.next(categories));
  }

  public addListItem(listId: number, listItem: CreateListItem) {
    const url = super.setStandardUrl(`lists/add/${listId}`);
    super._patch(url, [listItem]).subscribe(list => this.listSrc.next(list));
  }

  public createList(listDetails: CreateList, username: string, groupId: number) {
    const list: CreateList = {
      name: listDetails.name,
      createdBy: username,
      group: groupId,
      items: listDetails.items.map((item: CreateListItem) => {
        return {
          name: item.name,
          category: item.category,
          isComplete: false,
          createdBy: username,
        }
      })
    }
    const url = super.setStandardUrl('lists');
    super._post<List>(url, list).subscribe(list => this.listSrc.next(list));
  }

  public deleteList(listId: number) {
    const url = super.setStandardUrl(`lists/${listId}`);
    super._delete(url).subscribe(() => this.listSrc.next({} as List));
  }
}

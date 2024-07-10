import { Injectable } from '@angular/core';
import { BaseHttpService } from '@project-phoenix/shared/shared-data-access';
import { BehaviorSubject } from 'rxjs';
import { Category, CreateListItem, List, ListItem } from '../../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService extends BaseHttpService {
  private listSrc = new BehaviorSubject<List>({} as List);

  public getList(listId: number) {
    const url = super.setStandardUrl(`lists/${listId}`);
    return super._get<List>(url);
  }

  public toggleIsComplete(itemId: number, isComplete: boolean) {
    const url = super.setStandardUrl(`list-items/${itemId}`);
    return super._patch(url, { isComplete });
  }

  public getCategories(categoryName: string) {
    const url = super.setStandardUrl(`category/search/${categoryName}`);
    return super._get<Category[]>(url);
  }

  public addListItem(listId: number, listItem: CreateListItem) {
    const url = super.setStandardUrl(`lists/add/${listId}`);
    return super._patch(url, [listItem]);
  }
}

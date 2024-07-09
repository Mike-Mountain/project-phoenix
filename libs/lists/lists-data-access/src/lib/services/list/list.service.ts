import { Injectable } from '@angular/core';
import { BaseHttpService } from '@project-phoenix/shared/shared-data-access';
import { BehaviorSubject } from 'rxjs';
import { List } from '../../models/list.model';

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
}

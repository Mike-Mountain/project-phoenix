import { inject, Injectable } from '@angular/core';
import { AuthService, BaseHttpService } from '@project-phoenix/shared/shared-data-access';
import { Group } from '../../models/groups.model';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService extends BaseHttpService {

  private authService = inject(AuthService);

  private allGroupsSrc = new BehaviorSubject<Group[]>([]);
  private selectedGroupSrc = new BehaviorSubject<Group | undefined>(undefined);

  public getAllGroups(username: string) {
    const url = super.setStandardUrl('groups');
    return super._get<Group[]>(url).pipe(
      tap((groups: Group[]) => this.allGroupsSrc.next(groups))
    );
  }

  public getSelectedGroup(groupId?: number): Observable<Group> {
    if (groupId) {
      const url = super.setStandardUrl(`groups/${groupId}`);
      return super._get<Group>(url).pipe(
        tap(group => this.selectedGroupSrc.next(group))
      );
    } else return of({} as Group);
  }

  public createGroup(group: Group) {
    const url = super.setStandardUrl('groups');
    return super._post<Group>(url, group).pipe(
      tap(() => {
        this.selectedGroupSrc.next(group);
      })
    );
  }

  public editGroup(groupId: number, group: Partial<Group>) {
    const url = super.setStandardUrl(`groups/${groupId}`);
    return super._put(url, group).pipe(
      tap((savedGroup) => this.selectedGroupSrc.next(savedGroup))
    );
  }

  public addGroupMembers(members: string[], groupId: number) {
    const url = super.setStandardUrl(`groups/members/${groupId}`);
    return super._patch(url, members);
  }

  public exitGroup(groupId: number, username: string) {
    const url = super.setStandardUrl(`groups/leave/${groupId}`);
    return super._post(url, { username })
  }
}

import { inject, Injectable } from '@angular/core';
import { AuthService, BaseHttpService } from '@project-phoenix/shared/shared-data-access';
import { Group } from '../../models/groups.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService extends BaseHttpService {

  private authService = inject(AuthService);
  private selectedGroupSrc = new BehaviorSubject<Group>({} as Group);


  public getSelectedGroup(): Observable<Group> {
    return this.selectedGroupSrc.asObservable()
  }

  public fetchGroupById(groupId: number): void {
    const url = super.setStandardUrl(`groups/${groupId}`);
    super._get<Group>(url).subscribe(group => this.selectedGroupSrc.next(group));
  }

  public createGroup(group: Group, username?: string) {
    const url = super.setStandardUrl('groups');
    // TODO: If username, update user in auth service
    return super._post<Group>(url, group).subscribe((savedGroup) => this.selectedGroupSrc.next(savedGroup));
  }

  public editGroup(groupId: number, group: Partial<Group>, username?: string) {
    const url = super.setStandardUrl(`groups/${groupId}`);
    // TODO: If username, update user in auth service
    return super._put(url, group).subscribe((savedGroup) => this.selectedGroupSrc.next(savedGroup));
  }

  public addGroupMembers(members: string[], groupId: number) {
    const url = super.setStandardUrl(`groups/members/${groupId}`);
    return super._patch(url, members).subscribe(group => this.selectedGroupSrc.next(group));
  }

  public exitGroup(groupId: number, username: string) {
    const url = super.setStandardUrl(`groups/leave/${groupId}`);
    return super._post(url, { username }).subscribe((response: Group) => {
      // TODO: Update user in auth service
      this.selectedGroupSrc.next(response);
    });
  }
}

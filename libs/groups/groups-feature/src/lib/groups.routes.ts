import { Routes } from '@angular/router';
import { GroupsDashboardComponent } from './components/groups-dashboard/groups-dashboard.component';
import { EditGroupComponent } from './components/edit-group/edit-group.component';
import { ListDetailsComponent } from '@project-phoenix/lists-feature';
import { ManageGroupComponent } from './components/manage-group/manage-group.component';

export const groupsRoutes: Routes = [
  { path: '', component: GroupsDashboardComponent },
  {path: 'create-group', component: EditGroupComponent},
  {path: 'manage-group', component: ManageGroupComponent},
  {path: 'edit-group', component: EditGroupComponent},
  {path: 'list', component: ListDetailsComponent}
];

import { Routes } from '@angular/router';
import { GroupsDashboardComponent } from './components/groups-dashboard/groups-dashboard.component';
import { EditGroupComponent } from './components/edit-group/edit-group.component';
import { ListDetailsComponent } from '@project-phoenix/lists-feature';

export const groupsRoutes: Routes = [
  { path: '', component: GroupsDashboardComponent },
  {path: 'create-group', component: EditGroupComponent},
  {path: 'edit-group/:id', component: EditGroupComponent},
  {path: 'list/:id', component: ListDetailsComponent}
];

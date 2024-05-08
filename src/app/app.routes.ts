import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobFavoritesComponent } from './components/job-favorites/job-favorites.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';

export const routes: Routes = [
  {path: '', redirectTo: 'jobs', pathMatch: 'full'},
  {path:'jobs', component: JobListComponent},
  {path: 'jobs/:id', component: JobDetailComponent},
  {path: 'favorites', component: JobFavoritesComponent},
  {path: '**', redirectTo: 'jobs', pathMatch: 'full'}
];